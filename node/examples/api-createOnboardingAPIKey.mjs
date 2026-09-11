import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "onboarding", credentials: { ["onboarding"]: { ["OnboardingSessionBearer"]: process.env.API_ONBOARDING_ONBOARDINGSESSIONBEARER ?? '' } },
});
const result = await client.api.createOnboardingAPIKey(
  {
    body: {
      name: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.api_key_id);
console.log(result.data.data.status);
console.log(result.meta.requestId);
