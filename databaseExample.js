import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

// const sql = postgres(
//   'postgres://next_js_ecommerce_store:next_js_ecommerce_store@localhost/next_js_ecommerce_store',
// );

console.log(
  await sql`
    SELECT
      *
    FROM
      products;
  `,
);
