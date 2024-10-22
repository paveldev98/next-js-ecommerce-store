'use server';

import { cookies } from 'next/headers';

interface ProductComment {
  id: number;
  comment: string;
}

export default async function removeProductById(productId: number) {
  // 1. Get current cookie
  const productsCommentsCookie = (await cookies()).get('productsComments');

  // 2. Parse the cookie value
  let productsComments: ProductComment[] = productsCommentsCookie
    ? JSON.parse(productsCommentsCookie.value)
    : [];

  if (!Array.isArray(productsComments)) {
    productsComments = [];
  }

  // 3. Filter the product with the matching ID out
  productsComments = productsComments.filter(
    (productComment: ProductComment) => productComment.id !== productId,
  );

  // 4. Update the cookie with the new array (after removing the product)
  (await cookies()).set('productsComments', JSON.stringify(productsComments), {
    path: '/',
  });
}
