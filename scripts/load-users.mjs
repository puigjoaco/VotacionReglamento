import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = 'https://njprxylfkhwdehswelka.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseServiceKey) {
  console.error('❌ Falta variable de entorno SUPABASE_SERVICE_ROLE_KEY o NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Todos los usuarios de producción
const usuarios = [
  // PISO 2
  { rut: '19134605K', apellido_razon_social: 'MARTINEZ', departamento: '21', tipo: 'residente', activo: true },
  { rut: '174071241', apellido_razon_social: 'PICASSO', departamento: '21', tipo: 'propietario', activo: true },
  { rut: '71180018', apellido_razon_social: 'CASTILLO', departamento: '22', tipo: 'residente', activo: true },
  { rut: '71180018', apellido_razon_social: 'CASTILLO', departamento: '22', tipo: 'propietario', activo: true },
  { rut: '174074593', apellido_razon_social: 'SEARTE', departamento: '23', tipo: 'residente', activo: true },
  { rut: '69739423', apellido_razon_social: 'CRUZ', departamento: '23', tipo: 'propietario', activo: true },
  { rut: '62217065', apellido_razon_social: 'PERSI', departamento: '24', tipo: 'residente', activo: true },
  { rut: '50272354', apellido_razon_social: 'AGUILAR', departamento: '24', tipo: 'propietario', activo: true },

  // PISO 3
  { rut: '86887029', apellido_razon_social: 'HERRERA', departamento: '31', tipo: 'residente', activo: true },
  { rut: '99721995', apellido_razon_social: 'MARTORELL', departamento: '31', tipo: 'propietario', activo: true },
  { rut: '167186572', apellido_razon_social: 'ERAZO', departamento: '32', tipo: 'residente', activo: true },
  { rut: '186385004', apellido_razon_social: 'TARUD', departamento: '32', tipo: 'propietario', activo: true },
  { rut: '77735797', apellido_razon_social: 'ORCHARD', departamento: '33', tipo: 'residente', activo: true },
  { rut: '176676043', apellido_razon_social: 'SALAS', departamento: '33', tipo: 'propietario', activo: true },
  { rut: '77023968', apellido_razon_social: 'VILLABLANCA', departamento: '34', tipo: 'residente', activo: true },
  { rut: '77023968', apellido_razon_social: 'VILLABLANCA', departamento: '34', tipo: 'propietario', activo: true },

  // PISO 4
  { rut: '196382461', apellido_razon_social: 'POBLETE', departamento: '41', tipo: 'residente', activo: true },
  { rut: '145306396', apellido_razon_social: 'GODOY', departamento: '41', tipo: 'propietario', activo: true },
  { rut: '166636159', apellido_razon_social: 'FELL', departamento: '42', tipo: 'residente', activo: true },
  { rut: '6051867K', apellido_razon_social: 'COSTA', departamento: '42', tipo: 'propietario', activo: true },
  { rut: '189340311', apellido_razon_social: 'ALVARINO', departamento: '43', tipo: 'residente', activo: true },
  { rut: '189340311', apellido_razon_social: 'ALVARINO', departamento: '43', tipo: 'propietario', activo: true },
  { rut: '153784450', apellido_razon_social: 'LOPEZ', departamento: '44', tipo: 'residente', activo: true },
  { rut: '153784450', apellido_razon_social: 'LOPEZ', departamento: '44', tipo: 'propietario', activo: true },

  // PISO 5
  { rut: '70170841', apellido_razon_social: 'VOU', departamento: '51', tipo: 'residente', activo: true },
  { rut: '70170841', apellido_razon_social: 'VOU', departamento: '51', tipo: 'propietario', activo: true },
  { rut: '138321800', apellido_razon_social: 'VISCARRA', departamento: '52', tipo: 'residente', activo: true },
  { rut: '50773132', apellido_razon_social: 'MENDIZABAL', departamento: '52', tipo: 'propietario', activo: true },
  { rut: '177023906', apellido_razon_social: 'LOBOS', departamento: '53', tipo: 'residente', activo: true },
  { rut: '50773132', apellido_razon_social: 'MENDIZABAL', departamento: '53', tipo: 'propietario', activo: true },
  { rut: '178606840', apellido_razon_social: 'GONZALES', departamento: '54', tipo: 'residente', activo: true },
  { rut: '176676043', apellido_razon_social: 'SALAS', departamento: '54', tipo: 'propietario', activo: true },

  // PISO 6
  { rut: '75603940', apellido_razon_social: 'HAMILTON', departamento: '61', tipo: 'residente', activo: true },
  { rut: '76359601', apellido_razon_social: 'ZAGAL', departamento: '61', tipo: 'propietario', activo: true },
  { rut: '182293509', apellido_razon_social: 'GONZALEZ', departamento: '62', tipo: 'residente', activo: true },
  { rut: '163704388', apellido_razon_social: 'MATUS', departamento: '62', tipo: 'propietario', activo: true },
  { rut: '174025126', apellido_razon_social: 'PERSICO', departamento: '63', tipo: 'residente', activo: true },
  { rut: '174025126', apellido_razon_social: 'PERSICO', departamento: '63', tipo: 'propietario', activo: true },
  { rut: '70446405', apellido_razon_social: 'BAULUT', departamento: '64', tipo: 'residente', activo: true },
  { rut: '70446405', apellido_razon_social: 'BAULUT', departamento: '64', tipo: 'propietario', activo: true },

  // PISO 7
  { rut: '163688891', apellido_razon_social: 'ZAMORANO', departamento: '71', tipo: 'residente', activo: true },
  { rut: '163688891', apellido_razon_social: 'ZAMORANO', departamento: '71', tipo: 'propietario', activo: true },
  { rut: '173110537', apellido_razon_social: 'URRA', departamento: '72', tipo: 'residente', activo: true },
  { rut: '173110537', apellido_razon_social: 'URRA', departamento: '72', tipo: 'propietario', activo: true },
  { rut: '189322135', apellido_razon_social: 'GONZALEZ', departamento: '73', tipo: 'residente', activo: true },
  { rut: '67694368', apellido_razon_social: 'MARDONES', departamento: '73', tipo: 'propietario', activo: true },
  { rut: '173662874', apellido_razon_social: 'PUIG', departamento: '74', tipo: 'residente', activo: true },
  { rut: '10047347K', apellido_razon_social: 'BARRIGA', departamento: '74', tipo: 'propietario', activo: true },

  // PISO 8
  { rut: '109914932', apellido_razon_social: 'TENSY', departamento: '81', tipo: 'residente', activo: true },
  { rut: '13479352K', apellido_razon_social: 'ROJAS', departamento: '81', tipo: 'propietario', activo: true },
  { rut: '8948412K', apellido_razon_social: 'MONTALVA', departamento: '82', tipo: 'residente', activo: true },
  { rut: '126984340', apellido_razon_social: 'ARRIAGADA', departamento: '82', tipo: 'propietario', activo: true },
  { rut: '18634619K', apellido_razon_social: 'RUZ', departamento: '83', tipo: 'residente', activo: true },
  { rut: '170839641', apellido_razon_social: 'ZAMORANO', departamento: '83', tipo: 'propietario', activo: true },
  { rut: '16431068K', apellido_razon_social: 'ALCAILDE', departamento: '84', tipo: 'residente', activo: true },
  { rut: '16431068K', apellido_razon_social: 'ALCAINDE', departamento: '84', tipo: 'propietario', activo: true },

  // PISO 9
  { rut: '280708364', apellido_razon_social: 'RICCHIONE', departamento: '91', tipo: 'residente', activo: true },
  { rut: '92122670', apellido_razon_social: 'CALDERON', departamento: '91', tipo: 'propietario', activo: true },
  { rut: '153845174', apellido_razon_social: 'KNOOP', departamento: '92', tipo: 'residente', activo: true },
  { rut: '105171773', apellido_razon_social: 'SALINAS', departamento: '92', tipo: 'propietario', activo: true },
  { rut: '166634717', apellido_razon_social: 'CORDERO', departamento: '93', tipo: 'residente', activo: true },
  { rut: '166634717', apellido_razon_social: 'CORDERO', departamento: '93', tipo: 'propietario', activo: true },
  { rut: '73599164', apellido_razon_social: 'GALDAMES', departamento: '94', tipo: 'residente', activo: true },
  { rut: '108344628', apellido_razon_social: 'PRADO', departamento: '94', tipo: 'propietario', activo: true },

  // PISO 10
  { rut: '173662874', apellido_razon_social: 'PUIG', departamento: '101', tipo: 'residente', activo: true },
  { rut: '173662874', apellido_razon_social: 'PUIG', departamento: '101', tipo: 'propietario', activo: true },
  { rut: '166607017', apellido_razon_social: 'LOZANO', departamento: '102', tipo: 'residente', activo: true },
  { rut: '63859965', apellido_razon_social: 'ALVAREZ', departamento: '102', tipo: 'propietario', activo: true },
  { rut: '121140942', apellido_razon_social: 'GONZALEZ', departamento: '103', tipo: 'residente', activo: true },
  { rut: '121140942', apellido_razon_social: 'GONZALEZ', departamento: '103', tipo: 'propietario', activo: true },
  { rut: '65794926', apellido_razon_social: 'AVILA', departamento: '104', tipo: 'residente', activo: true },
  { rut: '67694368', apellido_razon_social: 'MARDONES', departamento: '104', tipo: 'propietario', activo: true },

  // PISO 11
  { rut: '67284860', apellido_razon_social: 'BENSI', departamento: '111', tipo: 'residente', activo: true },
  { rut: '67284860', apellido_razon_social: 'BENSI', departamento: '111', tipo: 'propietario', activo: true },
  { rut: '136570579', apellido_razon_social: 'ALCERRECA', departamento: '112', tipo: 'residente', activo: true },
  { rut: '150993814', apellido_razon_social: 'MARTIN', departamento: '112', tipo: 'propietario', activo: true },
  { rut: '183911805', apellido_razon_social: 'GREZ', departamento: '113', tipo: 'residente', activo: true },
  { rut: '133329730', apellido_razon_social: 'TARUD', departamento: '113', tipo: 'propietario', activo: true },
  { rut: '8983743K', apellido_razon_social: 'MADARIAGA', departamento: '114', tipo: 'residente', activo: true },
  { rut: '79748765', apellido_razon_social: 'RIKLI', departamento: '114', tipo: 'propietario', activo: true },

  // PISO 12
  { rut: '186409469', apellido_razon_social: 'GONZALEZ', departamento: '121', tipo: 'residente', activo: true },
  { rut: '186409469', apellido_razon_social: 'GONZALEZ', departamento: '121', tipo: 'propietario', activo: true },
  { rut: '138513750', apellido_razon_social: 'MARTIN', departamento: '122', tipo: 'propietario', activo: true },
  { rut: '15551910K', apellido_razon_social: 'AXTELL', departamento: '123', tipo: 'residente', activo: true },
  { rut: '166121876', apellido_razon_social: 'MARTIN', departamento: '123', tipo: 'propietario', activo: true },
  { rut: '70046164', apellido_razon_social: 'LORCA', departamento: '124', tipo: 'residente', activo: true },
  { rut: '70046164', apellido_razon_social: 'LORCA', departamento: '124', tipo: 'propietario', activo: true },

  // PISO 13
  { rut: '97042772', apellido_razon_social: 'DIAZ', departamento: '131', tipo: 'residente', activo: true },
  { rut: '94761484', apellido_razon_social: 'FREIG', departamento: '131', tipo: 'propietario', activo: true },
  { rut: '162118064', apellido_razon_social: 'CASTILLO', departamento: '132', tipo: 'residente', activo: true },
  { rut: '77905715', apellido_razon_social: 'BEYTIA', departamento: '132', tipo: 'propietario', activo: true },
  { rut: '102650824', apellido_razon_social: 'MUNITO', departamento: '133', tipo: 'residente', activo: true },
  { rut: '77716599', apellido_razon_social: 'DUCE', departamento: '133', tipo: 'propietario', activo: true },
  { rut: '140080144', apellido_razon_social: 'MATELUNA', departamento: '134', tipo: 'residente', activo: true },
  { rut: '121072858', apellido_razon_social: 'PEREZ', departamento: '134', tipo: 'propietario', activo: true },

  // PISO 14
  { rut: '9497691K', apellido_razon_social: 'MARIN', departamento: '141', tipo: 'residente', activo: true },
  { rut: '61863516', apellido_razon_social: 'KIND', departamento: '141', tipo: 'propietario', activo: true },
  { rut: '153715149', apellido_razon_social: 'GAMBI', departamento: '142', tipo: 'residente', activo: true },
  { rut: '113756160', apellido_razon_social: 'AGUILERA', departamento: '142', tipo: 'propietario', activo: true },
  { rut: '193362818', apellido_razon_social: 'MORA', departamento: '143', tipo: 'residente', activo: true },
  { rut: '116303949', apellido_razon_social: 'YAUFF', departamento: '143', tipo: 'propietario', activo: true },
  { rut: '158306360', apellido_razon_social: 'WEGNER', departamento: '144', tipo: 'residente', activo: true },
  { rut: '66336999', apellido_razon_social: 'ZACCONI', departamento: '144', tipo: 'propietario', activo: true },

  // PISO 15
  { rut: '260422596', apellido_razon_social: 'DUQUE', departamento: '151', tipo: 'residente', activo: true },
  { rut: '260422596', apellido_razon_social: 'DUQUE', departamento: '151', tipo: 'propietario', activo: true },
  { rut: '170828933', apellido_razon_social: 'MASSOUD', departamento: '152', tipo: 'residente', activo: true },
  { rut: '109772321', apellido_razon_social: 'GOMEZ', departamento: '152', tipo: 'propietario', activo: true },
  { rut: '176143355', apellido_razon_social: 'ZANOR', departamento: '153', tipo: 'residente', activo: true },
  { rut: '55360006', apellido_razon_social: 'LEMPERT', departamento: '153', tipo: 'propietario', activo: true },
  { rut: '180206620', apellido_razon_social: 'CAVALIERI', departamento: '154', tipo: 'residente', activo: true },
  { rut: '180206620', apellido_razon_social: 'CAVALIERI', departamento: '154', tipo: 'propietario', activo: true },

  // PISO 16
  { rut: '143021092', apellido_razon_social: 'PINEDA', departamento: '161', tipo: 'residente', activo: true },
  { rut: '772276087', apellido_razon_social: 'EL GOBERNADOR SPA', departamento: '161', tipo: 'propietario', activo: true },
  { rut: '135108928', apellido_razon_social: 'GALEZ', departamento: '162', tipo: 'residente', activo: true },
  { rut: '166585015', apellido_razon_social: 'DIAZ', departamento: '162', tipo: 'propietario', activo: true },
  { rut: '192012546', apellido_razon_social: 'VAZQUEZ', departamento: '163', tipo: 'residente', activo: true },
  { rut: '192012546', apellido_razon_social: 'VAZQUEZ', departamento: '163', tipo: 'propietario', activo: true },
  { rut: '281163205', apellido_razon_social: 'PELTZER', departamento: '164', tipo: 'residente', activo: true },
  { rut: '76359601', apellido_razon_social: 'ETCHART', departamento: '164', tipo: 'propietario', activo: true },

  // PISO 17
  { rut: '174023956', apellido_razon_social: 'DECCAFIOLI', departamento: '171', tipo: 'residente', activo: true },
  { rut: '174023956', apellido_razon_social: 'DECCAFIOLI', departamento: '171', tipo: 'propietario', activo: true },
  { rut: '189334648', apellido_razon_social: 'LATHROP', departamento: '172', tipo: 'residente', activo: true },
  { rut: '189334648', apellido_razon_social: 'LATHROP', departamento: '172', tipo: 'propietario', activo: true },
  { rut: '158304082', apellido_razon_social: 'BERRIOS', departamento: '173', tipo: 'residente', activo: true },
  { rut: '767736509', apellido_razon_social: 'RENTAS SANTA MARIA', departamento: '173', tipo: 'propietario', activo: true },
  { rut: '772276087', apellido_razon_social: 'EL GOBERNADOR SPA', departamento: '174', tipo: 'propietario', activo: true },

  // PISO 18
  { rut: '153137854', apellido_razon_social: 'ORYAN', departamento: '181', tipo: 'residente', activo: true },
  { rut: '772276087', apellido_razon_social: 'EL GOBERNADOR SPA', departamento: '181', tipo: 'propietario', activo: true },
  { rut: '194385218', apellido_razon_social: 'ALCERRECA', departamento: '182', tipo: 'residente', activo: true },
  { rut: '772276087', apellido_razon_social: 'EL GOBERNADOR SPA', departamento: '182', tipo: 'propietario', activo: true },
  { rut: '190808203', apellido_razon_social: 'HEPP', departamento: '183', tipo: 'residente', activo: true },
  { rut: '772276133', apellido_razon_social: 'PUERTO FJORA SPA', departamento: '183', tipo: 'propietario', activo: true },
  { rut: '190808203', apellido_razon_social: 'HEPP', departamento: '184', tipo: 'residente', activo: true },
  { rut: '772276133', apellido_razon_social: 'PUERTO FJORD SPA', departamento: '184', tipo: 'propietario', activo: true },
];

async function loadUsers() {
  console.log('🚀 Cargando usuarios de producción en Supabase...\n');
  console.log(`📊 Total usuarios a cargar: ${usuarios.length}\n`);

  // No eliminamos, solo hacemos upsert (la constraint única manejará duplicados)
  console.log('🔄 Modo: Upsert (reemplazar duplicados)\n');

  // Insertar en lotes de 100
  const batchSize = 100;
  let inserted = 0;
  let errors = 0;

  for (let i = 0; i < usuarios.length; i += batchSize) {
    const batch = usuarios.slice(i, i + batchSize);

    const { data, error } = await supabase
      .from('usuarios')
      .upsert(batch, { onConflict: 'departamento,tipo', ignoreDuplicates: false });

    if (error) {
      console.log(`❌ Error en lote ${i / batchSize + 1}: ${error.message}`);
      errors += batch.length;
    } else {
      inserted += batch.length;
      console.log(`✅ Lote ${Math.floor(i / batchSize) + 1} completado (${inserted} usuarios)`);
    }
  }

  console.log(`\n✅ Proceso completado:`);
  console.log(`   - Usuarios insertados: ${inserted}`);
  console.log(`   - Errores: ${errors}`);

  // Verificar resultado
  const { data, error, count } = await supabase
    .from('usuarios')
    .select('*', { count: 'exact' })
    .eq('activo', true);

  if (error) {
    console.log('\n❌ Error al verificar:', error.message);
  } else {
    console.log(`\n📊 Total usuarios en base de datos: ${count}`);

    // Contar por tipo
    const tipos = data.reduce((acc, u) => {
      acc[u.tipo] = (acc[u.tipo] || 0) + 1;
      return acc;
    }, {});

    console.log('\n   Por tipo:');
    Object.entries(tipos).forEach(([tipo, count]) => {
      console.log(`   - ${tipo}: ${count}`);
    });

    // Departamentos únicos
    const departamentos = [...new Set(data.map(u => u.departamento))];
    console.log(`\n   Departamentos: ${departamentos.length}`);
  }
}

loadUsers()
  .then(() => {
    console.log('\n✨ ¡Listo! La base de datos está lista para producción.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
