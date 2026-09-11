import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
});
const result = await client.api.startOnboarding(
  {
    body: {
      email: "example",
      first_name: "example",
      last_name: "example",
    },
  },
  { maxAttempts: 1 },
);
console.log(result.meta.requestId);
