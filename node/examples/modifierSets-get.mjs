import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
const result = await client.modifierSets.get(
  "example",
  {},
  { maxAttempts: 1 },
);
console.log(result.modifier_set_id);
console.log(result.status);
