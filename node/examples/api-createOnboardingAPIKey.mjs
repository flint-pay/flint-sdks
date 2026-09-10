import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid', allowInsecureHttp: process.env.API_ALLOW_INSECURE_HTTP === '1', authMode: "onboarding", credentials: { ["onboarding"]: { ["OnboardingSessionBearer"]: process.env.API_ONBOARDING_ONBOARDINGSESSIONBEARER ?? '' } } });
const result = await client.api.createOnboardingAPIKey({
  "body": {
    "name": "example"
  }
}, { maxAttempts: 1 });
console.log(result.meta.requestId);
