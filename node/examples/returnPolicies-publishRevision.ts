import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnPolicies.publishRevision(
  "example",
  {
    expected_current_return_policy_revision_id: "example",
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
