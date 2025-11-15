export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard/:path*', '/comentario/:path*', '/api/comentarios/:path*'],
};
