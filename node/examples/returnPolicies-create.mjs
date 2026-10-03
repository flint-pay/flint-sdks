import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
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
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.current_return_policy_revision_id);
console.log(result.return_policy_id);
