import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentIntents.create(
  {
    amount_money: {
      amount: "2500",
      currency: "USD",
    },
    capture_method: "automatic",
    external_reference_id: "purchase-1001",
    payment_options: ["card"],
    receipt_email: "buyer@example.com",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.payment_intent.payment_intent_id);
console.log(result.payment_intent.status);
