import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.startFlow(
  {
    email: "example",
    first_name: "example",
    last_name: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
