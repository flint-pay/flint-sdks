import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.organizations.create(
  {
    metadata: {
      segment: "enterprise",
    },
    name: "Northeast Region",
    parent_organization_id: "org_01JQ4X2R0W0RTM8VJQ8YQ7P9AB",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.organization_id);
console.log(result.status);
