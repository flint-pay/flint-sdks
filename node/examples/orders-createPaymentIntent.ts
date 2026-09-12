import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.createPaymentIntent(
  "ord_replace_with_your_order_id",
  {
    amount_money: {
      amount: "2500",
      currency: "USD",
    },
    payment_options: ["card"],
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.payment_intent.payment_intent_id);
console.log(result.payment_intent.status);
