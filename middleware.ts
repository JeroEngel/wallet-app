import { NextRequest, NextResponse } from 'next/server'

// Rutas públicas que no requieren autenticación
const PUBLIC_PATHS = ['/', '/login', '/register', '/favicon.ico', '/_next', '/api/auth/login', '/api/auth/register']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  // Permitir acceso a rutas públicas
  const isPublic = PUBLIC_PATHS.some(path => pathname === path || pathname.startsWith(path))
  // Leer el token de la cookie
  const token = request.cookies.get('token')?.value

  // Si la ruta es privada y no hay token, redirigir a /login
  if (!isPublic && !token) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/transactions/:path*', '/add-funds', '/send-money', '/request-money'],
} 