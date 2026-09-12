import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.returnPolicies.get(
  "example",
  {},
  { maxAttempts: 1 },
);
console.log(result.current_return_policy_revision_id);
console.log(result.return_policy_id);
