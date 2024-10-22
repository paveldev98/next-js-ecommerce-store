import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      img_src varchar(100) NOT NULL,
      product_name varchar(100) NOT NULL,
      product_price integer
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products `;
}
