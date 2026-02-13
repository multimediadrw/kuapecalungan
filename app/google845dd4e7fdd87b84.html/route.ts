import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('google-site-verification: google845dd4e7fdd87b84.html', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
