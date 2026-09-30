import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  onboardingToken: process.env.ONBOARDING_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.createAPIKey(
  {
    name: "example",
    "Idempotency-Key": idempotencyKey,
  }
);
console.log(result.api_key_id);
console.log(result.status);
