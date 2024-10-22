import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from './products/products';

// const products = [
//   {
//     id: 1,
//     imgSrc: '/speaker-1.png',
//     productName: 'Portable Wireless Blootooth Speaker',
//     productPrice: 77,
//   },
//   {
//     id: 2,
//     imgSrc: '/speaker-2.png',
//     productName: 'Portable Wireless Mini Blootooth Speaker',
//     productPrice: 57,
//   },
//   {
//     id: 3,
//     imgSrc: '/headphones-1.png',
//     productName: 'Wireless Foldable Bluetooth Headphones',
//     productPrice: 40,
//   },
//   {
//     id: 4,
//     imgSrc: '/headphones-2.png',
//     productName: 'Foldable Wireless Bluetooth Headset',
//     productPrice: 52,
//   },
//   {
//     id: 5,
//     imgSrc: '/mouse.png',
//     productName: 'Portable Wireless Gaming Mouse',
//     productPrice: 30,
//   },
//   {
//     id: 6,
//     imgSrc: '/keyboard.png',
//     productName: 'Portable Wireless Keyboard',
//     productPrice: 80,
//   },
//   {
//     id: 7,
//     imgSrc: '/portable-monitor.png',
//     productName: 'Wireless Monitor HD Resolution',
//     productPrice: 140,
//   },
//   {
//     id: 8,
//     imgSrc: '/power-bank.png',
//     productName: 'Portable Power Bank Charger',
//     productPrice: 90,
//   },
// ];

export default async function Products() {
  const products = await getProductsInsecure();

  return (
    <>
      <div
        style={{
          color: '#FF6719',
          fontSize: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        All Products
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {products.map((product) => {
          return (
            <div
              key={`product-${product.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '30px',
                minWidth: '25%',
              }}
            >
              <Link
                href={`/${product.id}`}
                data-test-id="product-<product id>"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {product.imgSrc && (
                  <Image
                    src={product.imgSrc}
                    width={200}
                    height={170}
                    alt="product-image"
                  />
                )}
                <p
                  style={{
                    textAlign: 'center',
                    width: '60%',
                    marginTop: '10px',
                  }}
                >
                  {product.productName}
                </p>
              </Link>
              <h2 style={{ color: '#FF6719' }}>${product.productPrice}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
