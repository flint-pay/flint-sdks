import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.createReturnPolicy(
  {
    body: {
      name: "example",
      revision: {
        approval_mode: "automatic",
        eligibility_result: "ineligible",
        is_merchandise_return_required: true,
        priority: 1,
        scope: {},
      },
    },
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.current_return_policy_revision_id);
console.log(result.data.data.return_policy_id);
console.log(result.meta.requestId);
