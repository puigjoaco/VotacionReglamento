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
        rut: { label: 'RUT', type: 'text', placeholder: '12.345.678-9' },
        apellido: {
          label: 'Apellido o Razón Social',
          type: 'text',
          placeholder: 'González',
        },
      },
      async authorize(credentials) {
        if (!credentials?.rut || !credentials?.apellido) {
          throw new Error('RUT y Apellido son requeridos');
        }

        // Validar formato de RUT
        if (!validateRut(credentials.rut)) {
          throw new Error('RUT inválido');
        }

        // Limpiar y normalizar inputs
        const rutLimpio = cleanRut(credentials.rut);
        const apellidoNormalizado = normalizeText(credentials.apellido);

        // Buscar usuario en Supabase
        const supabase = await createClient();
        const { data: usuarios, error } = await supabase
          .from('usuarios')
          .select('*')
          .eq('rut', rutLimpio)
          .eq('activo', true);

        if (error) {
          console.error('Error al buscar usuario:', error);
          throw new Error('Error al verificar credenciales');
        }

        if (!usuarios || usuarios.length === 0) {
          throw new Error('Usuario no encontrado');
        }

        const usuario = usuarios[0] as Usuario;

        // Comparar apellido normalizado
        const apellidoUsuarioNormalizado = normalizeText(usuario.apellido_razon_social);

        if (apellidoUsuarioNormalizado !== apellidoNormalizado) {
          throw new Error('Apellido incorrecto');
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
