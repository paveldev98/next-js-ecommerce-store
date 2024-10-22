import './globals.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  // title: 'Home | Gizmo ON-THE-GO',
  title: {
    default: 'Home | Gizmo ON-THE-GO',
    template: '%s | Gizmo ON-THE-GO',
  },
  description: 'Generated by create next app',
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const productCommentsCookie = (await cookies()).get('productsComments');

  let productComments = productCommentsCookie
    ? JSON.parse(productCommentsCookie.value)
    : [];

  if (!Array.isArray(productComments)) {
    productComments = [];
  }

  interface ProductComment {
    comment: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const totalQuantity = productComments.reduce(
    (total: number, productComment: ProductComment) =>
      total + (parseInt(productComment.comment) || 0),
    0,
  );

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ background: '#F9F9F9' }}
      >
        <header
          style={{ width: '100%', height: '85px', background: '#3B3939' }}
        >
          <div
            style={{
              margin: '0 70px 0 70px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '20px',
            }}
          >
            <div>
              <Image src="/Gizmo-logo.png" alt="logo" width={120} height={47} />
            </div>
            <div className="nav-links">
              <Link href="/" data-test-id="products-link">
                Products
              </Link>
              <div>
                <Link
                  data-test-id="cart-link"
                  href="/cart"
                  style={{ margin: '0 5px 0 40px' }}
                >
                  <Image
                    src="/cart-empty.png"
                    alt="logo"
                    width={23}
                    height={23}
                  />
                </Link>
              </div>
              <div
                data-test-id="cart-count"
                style={{
                  background: '#FF6719',
                  borderRadius: '50%',
                  width: '23px',
                  height: '23px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {totalQuantity}
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer
          style={{ width: '100%', height: '100px', background: '#3B3939' }}
        />
      </body>
    </html>
  );
}
