import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "onboarding",
  credentials: {
    ["onboarding"]: {
      ["OnboardingSessionBearer"]: process.env.API_ONBOARDING_ONBOARDINGSESSIONBEARER ?? '',
    },
  },
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.onboarding.createAPIKey(
  {
    name: "example",
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.api_key_id);
console.log(result.status);
