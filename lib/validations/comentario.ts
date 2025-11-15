import { z } from 'zod';

export const createComentarioSchema = z.object({
  contenido: z
    .string()
    .min(1, 'El comentario no puede estar vacío')
    .max(10000, 'El comentario no puede exceder 10,000 caracteres')
    .transform((val) => val.trim()),
});

export const updateComentarioSchema = z.object({
  contenido: z
    .string()
    .min(1, 'El comentario no puede estar vacío')
    .max(10000, 'El comentario no puede exceder 10,000 caracteres')
    .transform((val) => val.trim()),
});

export type CreateComentarioInput = z.infer<typeof createComentarioSchema>;
export type UpdateComentarioInput = z.infer<typeof updateComentarioSchema>;
