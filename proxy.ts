import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function proxy(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  console.log('[Proxy] Checking path:', pathname, 'Token:', token ? 'Present' : 'Missing');

  // Si el usuario NO está autenticado y está en una ruta protegida
  if (!token) {
    // Redirigir a login
    console.log('[Proxy] No token, redirecting to login');
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Si está autenticado, permitir acceso
  console.log('[Proxy] Token present, allowing access to:', pathname);
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/comentario/:path*'],
};
