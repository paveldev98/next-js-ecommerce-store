'use client';
import removeProductById from './actions';

interface RemoveButtonProps {
  productId: number;
}

export default function RemoveButton(props: RemoveButtonProps) {
  return (
    <form>
      <button
        style={{
          padding: '10px 15px',
          marginTop: '40px',
          marginBottom: '40px',
          color: '#F9F9F9',
          background: '#FF6719',
          fontSize: '12PX',
          border: '1px solid #FF9D33',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        formAction={() => removeProductById(props.productId)}
      >
        Remove
      </button>
    </form>
  );
}
