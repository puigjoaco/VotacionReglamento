import { TipoUsuario } from './database';
import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      rut: string;
      apellido_razon_social: string;
      departamento: string;
      tipo: TipoUsuario;
    };
  }

  interface User {
    rut: string;
    apellido_razon_social: string;
    departamento: string;
    tipo: TipoUsuario;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    rut: string;
    apellido_razon_social: string;
    departamento: string;
    tipo: TipoUsuario;
  }
}
