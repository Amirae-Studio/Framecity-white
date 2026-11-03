import { NextResponse, type NextRequest } from "next/server";

// The studio is an open, view-only showcase: no sign-in anywhere. The old
// account pages just lead back into the studio.
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/studio";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/login/:path*", "/account/:path*"],
};
