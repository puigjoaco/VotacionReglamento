import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFileSync } from 'fs';
import { join } from 'path';
import { createClient } from '@/lib/supabase/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { comentario, comentarioId } = await request.json();

    if (!comentario) {
      return NextResponse.json(
        { error: 'El comentario es requerido' },
        { status: 400 }
      );
    }

    // Leer el Reglamento Interno desde public folder
    const reglamentoPath = join(process.cwd(), 'public', 'reglamentointerno.txt');
    const reglamento = readFileSync(reglamentoPath, 'utf-8');

    // Prompt para Gemini
    const prompt = `CONTEXTO:
Eres un asistente amable que ayuda a analizar comentarios sobre el Reglamento Interno de un edificio residencial en Chile.

REGLAMENTO INTERNO VIGENTE:
${reglamento}

COMENTARIO A ANALIZAR:
"${comentario}"

INSTRUCCIONES CRÍTICAS:
1. Identifica cada punto o tema mencionado en el comentario
2. PRIMERO determina la INTENCIÓN del usuario:
   - ¿Propone AGREGAR algo nuevo? (palabras clave: "debería", "se debe", "es necesario", "falta")
   - ¿Propone ELIMINAR/MODIFICAR algo existente? (palabras clave: "NO debería", "no se debe", "evitar", "quitar")
3. Si propone AGREGAR algo que YA EXISTE: cita el artículo y explica que ya está contemplado
4. Si propone ELIMINAR/MODIFICAR algo que YA EXISTE: reconoce que su propuesta es modificar/eliminar ese artículo
5. Si propone algo que NO EXISTE: reconócelo como aporte nuevo
6. Usa un tono SIEMPRE amable, agradecido y constructivo
7. NUNCA uses palabras como "inválido", "incorrecto", "equivocado"
8. Reconoce el valor de la participación del usuario

FORMATO DE RESPUESTA (JSON estricto):
{
  "mensaje_intro": "Gracias por participar en la revisión del Reglamento Interno. Tu opinión es fundamental para este proceso. Hemos analizado tu comentario y aquí te compartimos información que puede ser de tu interés:",
  "puntos_existentes": [
    {
      "tema": "Descripción breve del tema",
      "articulo": "Número del artículo (ej: Artículo 18°, numeral 3)",
      "texto_articulo": "Cita textual del artículo relevante",
      "mensaje_amable": "¡Excelente que te preocupe este tema! Te comentamos que el Reglamento vigente ya lo contempla en [artículo], donde establece que..."
    }
  ],
  "propuestas_modificacion": [
    {
      "tema": "Descripción breve del tema",
      "articulo": "Número del artículo que propone modificar/eliminar",
      "texto_articulo": "Cita textual del artículo actual",
      "mensaje_amable": "Entendemos tu preocupación sobre [artículo]. Actualmente establece que... Tu propuesta de modificarlo/eliminarlo será considerada durante el proceso de revisión."
    }
  ],
  "aportes_nuevos": [
    {
      "tema": "Descripción breve del tema",
      "mensaje_amable": "Este tema no está contemplado actualmente en el Reglamento. Tu aporte será considerado durante el proceso de revisión para evaluar su incorporación."
    }
  ],
  "mensaje_cierre": "Tu participación enriquece este proceso. Todos los aportes serán consolidados para la consulta escrita formal donde los propietarios votarán las modificaciones."
}

IMPORTANTE:
- Para "puntos_existentes": Usuario propone AGREGAR algo que YA EXISTE → cita el artículo con mensaje positivo
- Para "propuestas_modificacion": Usuario propone ELIMINAR/MODIFICAR algo que YA EXISTE → cita el artículo actual y reconoce su propuesta de cambio
- Para "aportes_nuevos": Usuario propone algo que NO EXISTE en el reglamento → reconócelo como aporte nuevo
- Sé específico y claro, pero siempre amable
- Si no hay elementos en una categoría, deja el array vacío: []
- NUNCA confundas una propuesta de eliminar con una propuesta de agregar

Responde SOLO con el JSON, sin markdown, sin backticks, sin texto adicional.`;

    // Usar Gemini 2.0 Flash Experimental (modelo más reciente)
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192,
      }
    });

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Limpiar el texto (por si Gemini agrega markdown)
    let cleanedResponse = responseText.trim();
    if (cleanedResponse.startsWith('```json')) {
      cleanedResponse = cleanedResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (cleanedResponse.startsWith('```')) {
      cleanedResponse = cleanedResponse.replace(/```\n?/g, '');
    }

    // Parsear el JSON
    const analisis = JSON.parse(cleanedResponse);

    // Guardar en la base de datos si se proporciona el ID
    if (comentarioId) {
      const supabase = await createClient();

      await supabase
        .from('comentarios')
        .update({
          analisis_ia: analisis,
          fecha_analisis: new Date().toISOString()
        })
        .eq('id', comentarioId);
    }

    return NextResponse.json({
      success: true,
      analisis,
    });
  } catch (error) {
    console.error('Error al analizar comentario:', error);
    return NextResponse.json(
      { error: 'Error al analizar el comentario', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
