import { cookies } from 'next/headers';
import Image from 'next/image';
import getProduct from '../products/products';
import FruitCommentForm from './FruitCommentForm';

export async function generateMetadata(props) {
  const product = getProduct(Number((await props.params).productId));
  return {
    title: product.productName,
    description: 'This is my single product page',
  };
}

export default async function ProductPage(props) {
  const product = getProduct(Number((await props.params).productId));

  const productCommentsCookie = (await cookies()).get('productComments');
  let productComments = productCommentsCookie
    ? JSON.parse(productCommentsCookie.value)
    : [];

  if (!product) {
    // eslint-disable-next-line no-undef
    return notFound();
  }

  if (!Array.isArray(productComments)) {
    productComments = [];
  }

  const productCommentToDisplay = productComments.find((productComment) => {
    return productComment.id === product.id;
  });

  console.log(productCommentToDisplay);

  return (
    <div
      style={{
        fontSize: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        gap: '20px',
      }}
    >
      <Image
        data-test-id="product-image"
        src={product.imgSrc}
        width={200}
        height={170}
      />
      <h5>{product.productName}</h5>
      <h2 data-test-id="product-price" style={{ color: '#FF6719' }}>
        ${product.productPrice}
      </h2>
      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        Please enter quantity:
      </p>
      <FruitCommentForm productId={product.id} />
    </div>
  );
}
