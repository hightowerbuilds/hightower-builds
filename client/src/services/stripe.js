import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const createPaymentIntent = async () => {
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 200, // $2.00 in cents
        currency: 'usd',
      }),
    });

    const { clientSecret } = await response.json();
    return clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

export const handlePayment = async () => {
  try {
    const stripe = await stripePromise;
    const clientSecret = await createPaymentIntent();

    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: {
          // Stripe Elements will handle the card input
        },
      },
    });

    if (error) {
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
}; 