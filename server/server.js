// Backend (Node.js with Express - Example)
const express = require('express');
const Stripe = require('stripe');
require('dotenv').config() // Make sure you have dotenv installed: npm install dotenv

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Replace with your secret key
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { price, productName, quantity } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
            },
            unit_amount: price, // Amount in cents
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.YOUR_FRONTEND_URL}/success`, // Replace with your success URL
      cancel_url: `${process.env.YOUR_FRONTEND_URL}/cancel`, // Replace with your cancel URL
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));