import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const onboardingToken = process.env.ONBOARDING_TOKEN;
if (!onboardingToken) throw new Error("Set ONBOARDING_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  onboardingToken,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.createAPIKey(
  {
    body: {
      name: "example",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.api_key_id);
console.log(result.status);
