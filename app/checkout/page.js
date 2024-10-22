// eslint-disable-next-line no-restricted-syntax
'use client';
import { useSearchParams } from 'next/navigation';
import removeProducts from './actions';

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  // Get the totalPrice from search parameters
  const totalPrice = searchParams.get('totalPrice');

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
        Checkout
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>Total: ${totalPrice}</div>
        <div style={{ marginTop: '20px', paddingBottom: '40px' }}>
          <h3 style={{ color: '#3B3939' }}>
            Enter Shipping and Payment Details
          </h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onSubmit={async (e) => {
              e.preventDefault(); // Prevent default form submission
              const form = e.target;

              // Check if the form is valid
              if (form.checkValidity()) {
                await removeProducts();
                // Redirect to the "Thank You" page
                window.location.href = '/thankyou';
              } else {
                // If the form is invalid, show validation errors
                form.reportValidity();
              }
            }}
          >
            <fieldset
              style={{
                width: '500px',
                color: '#3B3939',
                display: 'flex',
                flexDirection: 'column',
                padding: '0 60px 0 60px',
                border: '1px solid #cccccc',
                borderRadius: '5px',
              }}
            >
              <legend
                style={{
                  marginBottom: '20px',
                  padding: '0 5px 0 5px',
                  fontWeight: '700',
                  color: '#FF6719',
                }}
              >
                Shipping Details
              </legend>
              <label htmlFor="first-name">First Name</label>
              <input
                data-test-id="checkout-first-name"
                id="first-name"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '70%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
              <label htmlFor="last-name">Last Name</label>
              <input
                data-test-id="checkout-last-name"
                id="last-name"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '70%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
              <label htmlFor="email">Email</label>
              <input
                data-test-id="checkout-email"
                id="email"
                type="email"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '70%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
              <label htmlFor="address">Address</label>
              <input
                data-test-id="checkout-address"
                id="address"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '70%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
              <label htmlFor="city">City</label>
              <input
                data-test-id="checkout-city"
                id="city"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '70%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
              <label htmlFor="postal-code">Postal Code</label>
              <input
                data-test-id="checkout-postal-code"
                id="postal-code"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '70%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
              <label htmlFor="country">Country</label>
              <input
                data-test-id="checkout-country"
                id="country"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '70%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
            </fieldset>
            <fieldset
              style={{
                width: '500px',
                color: '#3B3939',
                display: 'flex',
                flexDirection: 'column',
                padding: '0 60px 0 60px',
                border: '1px solid #cccccc',
                borderRadius: '5px',
                marginTop: '20px',
                marginBottom: '40px',
              }}
            >
              <legend
                style={{
                  marginBottom: '20px',
                  padding: '0 5px 0 5px',
                  fontWeight: '700',
                  color: '#FF6719',
                }}
              >
                Payment Details
              </legend>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                data-test-id="checkout-credit-card"
                id="credit-card"
                type="number"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '70%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
              <label htmlFor="expiration-date">Expiration Date</label>
              <input
                data-test-id="checkout-expiration-date"
                id="expiration-date"
                type="date"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '70%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
              <label htmlFor="cvv-code">CVV Code</label>
              <input
                data-test-id="checkout-security-code"
                id="cvv-code"
                type="number"
                required
                style={{
                  margin: '5px 0 20px 0',
                  maxWidth: '35%',
                  height: '26px',
                  border: '1px solid #cccccc',
                  borderRadius: '5px',
                  paddingLeft: '5px',
                }}
              />
            </fieldset>
            <button
              data-test-id="checkout-confirm-order"
              style={{
                padding: '15px 20px',
                marginBottom: '40px',
                color: '#F9F9F9',
                background: '#FF6719',
                fontSize: '16px',
                border: '1px solid #FF9D33',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
