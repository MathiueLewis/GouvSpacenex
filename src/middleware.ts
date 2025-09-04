import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionOnEdge, shouldByPassMiddleware, redirectToLogin } from '@frontegg/nextjs/edge';

// Middleware to protect routes with Frontegg authentication
export const middleware = async (request: NextRequest) => {
  const { pathname, searchParams, origin } = request.nextUrl;

  // Skip middleware for public routes
  if (shouldByPassMiddleware(pathname)) {
    return NextResponse.next();
  }

  const session = await getSessionOnEdge(request);

  if (!session) {
    return redirectToLogin(pathname, searchParams, origin);
  }

  return NextResponse.next();
};

export const config = {
  matcher: '/(.*)',
};