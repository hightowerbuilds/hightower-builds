// Frontend (React Component)
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY'); // Replace with your actual key

const SweatshirtCheckout = () => {
  const [stripe, setStripe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    stripePromise.then(setStripe);
  }, []);

  const handleCheckout = async () => {
    if (!stripe) {
      console.error("Stripe.js hasn't loaded yet.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/create-checkout-session', { // Your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: 2500, // Amount in cents
          productName: 'Sweatshirt',
          quantity: 1,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session.');
      }

      const { id } = await response.json();
      const { error } = await stripe.redirectToCheckout({ sessionId: id });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      console.error("Error during checkout:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <button onClick={handleCheckout} disabled={!stripe || loading}>
        {loading ? 'Loading...' : 'Buy Sweatshirt ($25.00)'}
      </button>
    </div>
  );
};

export default SweatshirtCheckout;