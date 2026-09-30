import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  authMode: "checkout",
  credentials: {
    ["checkout"]: {
      ["CheckoutSessionIDHeader"]: process.env.API_CHECKOUT_CHECKOUTSESSIONIDHEADER ?? '',
      ["CheckoutSessionSecretHeader"]: process.env.API_CHECKOUT_CHECKOUTSESSIONSECRETHEADER ?? '',
    },
  },
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.createCustomerVerification(
  "example",
  {
    purpose: "save_payment_method",
    "X-Checkout-Session-ID": "example",
    "X-Checkout-Session-Secret": "example",
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.checkout_session_id);
console.log(result.customer_verification_id);
