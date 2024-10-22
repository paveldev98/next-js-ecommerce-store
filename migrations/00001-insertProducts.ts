import type { Sql } from 'postgres';

const products = [
  {
    id: 1,
    imgSrc: '/speaker-1.png',
    productName: 'Portable Wireless Blootooth Speaker',
    productPrice: 77,
  },
  {
    id: 2,
    imgSrc: '/speaker-2.png',
    productName: 'Portable Wireless Mini Blootooth Speaker',
    productPrice: 57,
  },
  {
    id: 3,
    imgSrc: '/headphones-1.png',
    productName: 'Wireless Foldable Bluetooth Headphones',
    productPrice: 40,
  },
  {
    id: 4,
    imgSrc: '/headphones-2.png',
    productName: 'Foldable Wireless Bluetooth Headset',
    productPrice: 52,
  },
  {
    id: 5,
    imgSrc: '/mouse.png',
    productName: 'Portable Wireless Gaming Mouse',
    productPrice: 30,
  },
  {
    id: 6,
    imgSrc: '/keyboard.png',
    productName: 'Portable Wireless Keyboard',
    productPrice: 80,
  },
  {
    id: 7,
    imgSrc: '/portable-monitor.png',
    productName: 'Wireless Monitor HD Resolution',
    productPrice: 140,
  },
  {
    id: 8,
    imgSrc: '/power-bank.png',
    productName: 'Portable Power Bank Charger',
    productPrice: 90,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (
          img_src,
          product_name,
          product_price
        )
      VALUES
        (
          ${product.imgSrc},
          ${product.productName},
          ${product.productPrice}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
