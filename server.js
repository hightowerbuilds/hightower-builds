import 'dotenv/config';
import express from 'express';
import Stripe from 'stripe';

const app = express();
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY); 

const storeItems = new Map([
  [1, { priceInCents: 10000, name: 'practice item' }],
  [2, { priceInCents: 20000, name: 'practice item 2' }],
]);

console.log(stripe);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});