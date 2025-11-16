import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Si el usuario NO está autenticado y está en una ruta protegida
  if (!token) {
    // Redirigir a login
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Si está autenticado, permitir acceso
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/comentario/:path*'],
};
