import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFileSync } from 'fs';
import { join } from 'path';

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

    // Leer el Reglamento Interno
    const reglamentoPath = join(process.cwd(), 'reglamentointerno.txt');
    const reglamento = readFileSync(reglamentoPath, 'utf-8');

    // Prompt para Gemini
    const prompt = `CONTEXTO:
Eres un asistente amable que ayuda a analizar comentarios sobre el Reglamento Interno de un edificio residencial en Chile.

REGLAMENTO INTERNO VIGENTE:
${reglamento}

COMENTARIO A ANALIZAR:
"${comentario}"

INSTRUCCIONES:
1. Identifica cada punto o tema mencionado en el comentario
2. Para cada punto, determina si YA existe en el Reglamento o es NUEVO
3. Si existe, cita el artículo específico y el texto relevante
4. Usa un tono SIEMPRE amable, agradecido y constructivo
5. NUNCA uses palabras como "inválido", "incorrecto", "equivocado", "válido", "válida"
6. NUNCA seas condescendiente
7. Reconoce el valor de la participación del usuario

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
  "aportes_nuevos": [
    {
      "tema": "Descripción breve del tema",
      "mensaje_amable": "Este tema no está contemplado actualmente en el Reglamento. Tu aporte será considerado durante el proceso de revisión para evaluar su incorporación."
    }
  ],
  "mensaje_cierre": "Tu participación enriquece este proceso. Todos los aportes serán consolidados para la consulta escrita formal donde los propietarios votarán las modificaciones."
}

IMPORTANTE:
- Para "puntos_existentes", SÍ cites artículos específicos del Reglamento
- Para "aportes_nuevos", reconócelos como aportes sin usar "válido"
- Sé específico y claro, pero siempre amable
- Si un punto ya existe, explica amablemente que está contemplado
- Si un punto es nuevo, reconócelo como un aporte sin juzgar
- Si no hay puntos existentes, deja el array vacío: []
- Si no hay aportes nuevos, deja el array vacío: []

Responde SOLO con el JSON, sin markdown, sin backticks, sin texto adicional.`;

    // Usar Gemini 3 Pro (modelo más reciente, pero con límites restrictivos: 25 RPM, 250 RPD)
    const model = genAI.getGenerativeModel({
      model: 'gemini-3-pro',
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
      const { createClient } = await import('@supabase/ssr');
      const { cookies } = await import('next/headers');

      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            getAll() {
              return cookies().getAll();
            },
            setAll(cookiesToSet) {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookies().set(name, value, options)
              );
            },
          },
        }
      );

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
