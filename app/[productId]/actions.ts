'use server';

import { cookies } from 'next/headers';

interface ProductComment {
  id: number;
  comment: string;
}

export default async function createOrUpdateCookies(
  productId: number,
  comment: string,
): Promise<void> {
  // 1. Get current cookie
  const productsCommentsCookie = (await cookies()).get('productsComments');

  // 2. Parse the cookie value
  let productsComments: ProductComment[] = productsCommentsCookie
    ? JSON.parse(productsCommentsCookie.value)
    : [];

  if (!Array.isArray(productsComments)) {
    productsComments = [];
  }

  // 3. Edit the cookie value
  const productToUpdate = productsComments.find(
    (productComment) => productComment.id === productId,
  );

  if (productToUpdate) {
    // Case C: cookie set, ID exists already, update the comment
    productToUpdate.comment = comment;
  } else {
    // Case B: cookie set, ID doesn't exist, push a new product
    productsComments.push({
      id: productId,
      comment: comment,
    });
  }

  // 4. Set the updated productsComments back into the cookie
  (await cookies()).set('productsComments', JSON.stringify(productsComments), {
    path: '/',
  });
}
