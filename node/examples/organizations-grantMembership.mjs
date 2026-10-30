import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.organizations.grantMembership(
  "org_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    role: "admin",
    user_id: "usr_01JQ4X9G7C2R9M18D1T9EAV1KX",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.organization_id);
console.log(result.status);
