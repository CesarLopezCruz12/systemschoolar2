import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    if(!session){
        const requestedPage = req.nextUrl.pathname;
        const url = req.nextUrl.clone();
        url.pathname = '/login';
        url.search = `p=${ requestedPage }`;

        return NextResponse.redirect(url);
    }


  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/Login']
}