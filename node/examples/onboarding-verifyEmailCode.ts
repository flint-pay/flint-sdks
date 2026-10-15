import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.verifyEmailCode(
  {
    verification_code: "example",
    verification_token: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant.merchant_id);
console.log(result.merchant.payments.status);
