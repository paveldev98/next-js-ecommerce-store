'use server';

import { cookies } from 'next/headers';

interface ProductComment {
  id: number;
  comment: number;
}

export default async function removeProducts() {
  // 1. Get current cookie
  const productsCommentsCookie = (await cookies()).get('productsComments');

  // 2. Parse the cookie value
  let productsComments: ProductComment[] = productsCommentsCookie
    ? JSON.parse(productsCommentsCookie.value)
    : [];

  if (!Array.isArray(productsComments)) {
    productsComments = [];
  }

  // 3. Set the comment value to 0 for all products
  productsComments = productsComments.map((productComment) => {
    productComment.comment = 0; // Set the comment to 0
    return productComment; // Return the modified object
  });

  // 4. Update the cookie with the new array (after removing the product)
  (await cookies()).set('productsComments', JSON.stringify(productsComments), {
    path: '/',
  });
}
