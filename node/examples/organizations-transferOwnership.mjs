import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.organizations.transferOwnership(
  "example",
  {
    new_owner_user_id: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.membership.organization_id);
console.log(result.membership.status);
