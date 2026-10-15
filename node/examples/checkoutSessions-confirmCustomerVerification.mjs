import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const checkoutSessionIDHeader = process.env.API_CHECKOUT_CHECKOUTSESSIONIDHEADER;
if (!checkoutSessionIDHeader) throw new Error("Set API_CHECKOUT_CHECKOUTSESSIONIDHEADER: this call requires a credential");
const checkoutSessionSecretHeader = process.env.API_CHECKOUT_CHECKOUTSESSIONSECRETHEADER;
if (!checkoutSessionSecretHeader) throw new Error("Set API_CHECKOUT_CHECKOUTSESSIONSECRETHEADER: this call requires a credential");
const client = new Client({
  baseUrl,
  authMode: "checkout",
  credentials: {
    ["checkout"]: {
      ["CheckoutSessionIDHeader"]: checkoutSessionIDHeader,
      ["CheckoutSessionSecretHeader"]: checkoutSessionSecretHeader,
    },
  },
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.checkoutSessions.confirmCustomerVerification(
  "cs_example",
  "cscv_example",
  {
    code: "123456",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.checkout_session.checkout_session_id);
console.log(result.checkout_session.status);
