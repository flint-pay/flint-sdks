import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.deleteReturnPolicy(
  {
    return_policy_id: "example",
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.current_return_policy_revision_id);
console.log(result.data.data.return_policy_id);
console.log(result.meta.requestId);
