'use client';

import { useState } from 'react';
import createOrUpdateCookies from './actions.ts';

export default function FruitCommentForm(props) {
  const [comment, setComment] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <input
        data-test-id="product-quantity"
        style={{
          border: '1px solid #FF6719',
          borderRadius: '8px',
          height: '30px',
          // maxWidth: '100px',
          fontSize: '22px',
          textAlign: 'center',
        }}
        type="number"
        value={comment}
        onChange={(event) => {
          // Ensure value is not negative
          if (event.currentTarget.value >= 0) {
            setComment(event.currentTarget.value);
          }
        }}
      />
      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        Currently in cart: {count} of this item
      </p>

      <button
        data-test-id="product-add-to-cart"
        style={{
          padding: '15px 20px',
          marginTop: '40px',
          marginBottom: '40px',
          color: '#F9F9F9',
          background: '#FF6719',
          fontSize: '16PX',
          border: '1px solid #FF9D33',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        formAction={() => {
          setCount(count + Number(comment));

          createOrUpdateCookies(props.productId, count + Number(comment));
        }}
      >
        Add to Cart
      </button>
    </form>
  );
}
