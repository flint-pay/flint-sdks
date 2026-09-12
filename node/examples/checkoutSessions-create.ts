import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.create(
  {
    order_id: "ord_replace_with_your_order_id",
    payments: {
      enabled_payment_options: ["card"],
    },
    redirects: {
      cancel_redirect_url: "https://shop.example.com/cart",
      success_redirect_url: "https://shop.example.com/checkout/success",
    },
    surface: "hosted",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.checkout_session.checkout_session_id);
console.log(result.checkout_session.status);
