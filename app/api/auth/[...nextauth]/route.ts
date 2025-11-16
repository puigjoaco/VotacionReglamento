import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createClient } from '@/lib/supabase/server';
import { validateRut, cleanRut, normalizeText } from '@/lib/utils/rut';
import type { Usuario } from '@/types/database';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credenciales',
      credentials: {
        departamento: { label: 'Departamento', type: 'text' },
        tipo: { label: 'Tipo', type: 'text' },
        rut: { label: 'RUT', type: 'text', placeholder: '12.345.678-9' },
      },
      async authorize(credentials) {
        if (!credentials?.departamento || !credentials?.tipo || !credentials?.rut) {
          throw new Error('Departamento, tipo y RUT son requeridos');
        }

        // Validar formato de RUT
        if (!validateRut(credentials.rut)) {
          throw new Error('RUT inválido');
        }

        // Limpiar RUT
        const rutLimpio = cleanRut(credentials.rut);

        // Buscar usuario en Supabase con departamento y tipo
        const supabase = await createClient();
        const { data: usuarios, error } = await supabase
          .from('usuarios')
          .select('*')
          .eq('departamento', credentials.departamento)
          .eq('tipo', credentials.tipo)
          .eq('activo', true);

        if (error) {
          console.error('Error al buscar usuario:', error);
          throw new Error('Error al verificar credenciales');
        }

        if (!usuarios || usuarios.length === 0) {
          throw new Error('Credenciales incorrectas. Verifica departamento y tipo.');
        }

        const usuario = usuarios[0] as Usuario;

        // Verificar RUT (case-insensitive)
        if (rutLimpio.toUpperCase() !== usuario.rut.toUpperCase()) {
          throw new Error('RUT incorrecto para este departamento y tipo.');
        }

        // Autenticación exitosa
        return {
          id: usuario.rut,
          rut: usuario.rut,
          apellido_razon_social: usuario.apellido_razon_social,
          departamento: usuario.departamento,
          tipo: usuario.tipo,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.rut = user.rut;
        token.apellido_razon_social = user.apellido_razon_social;
        token.departamento = user.departamento;
        token.tipo = user.tipo;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        rut: token.rut,
        apellido_razon_social: token.apellido_razon_social,
        departamento: token.departamento,
        tipo: token.tipo,
      };
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
