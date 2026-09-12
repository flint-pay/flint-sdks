import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnPolicies.create(
  {
    name: "example",
    revision: {
      approval_mode: "automatic",
      eligibility_result: "ineligible",
      is_merchandise_return_required: true,
      priority: 1,
      scope: {},
    },
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.current_return_policy_revision_id);
console.log(result.return_policy_id);
