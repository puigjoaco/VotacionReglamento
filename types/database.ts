export type TipoUsuario = 'propietario' | 'residente';
export type TipoComentario = 'aprobacion' | 'modificacion';

export interface Usuario {
  rut: string;
  apellido_razon_social: string;
  departamento: string;
  tipo: TipoUsuario;
  activo: boolean;
  created_at: string;
}

export interface Comentario {
  id: number;
  rut_usuario: string;
  departamento: string;
  tipo_usuario: TipoUsuario;
  contenido: string;
  tipo_comentario: TipoComentario;
  created_at: string;
  updated_at: string;
}

export interface ComentarioConUsuario extends Comentario {
  apellido_razon_social: string;
  usuario_activo: boolean;
}

export interface PuedeComentarResponse {
  puede_comentar: boolean;
  mensaje: string;
}
