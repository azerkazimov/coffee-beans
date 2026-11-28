import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const isAuth = false;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") && !isAuth) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  if (pathname.startsWith("/auth/signin") && isAuth) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/auth/signin"],
};
