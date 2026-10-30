import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.verifyEmail(
  {
    verification_code: "482193",
    verification_token: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant.merchant_id);
console.log(result.merchant.organization_id);
