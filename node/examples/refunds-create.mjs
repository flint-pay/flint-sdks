import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.refunds.create(
  {
    amount_money: {
      amount: "500",
      currency: "USD",
    },
    external_reference_id: "refund-1001",
    payment_intent_id: "pi_replace_with_your_payment_intent_id",
    reason: "requested_by_customer",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.refund_id);
console.log(result.status);
