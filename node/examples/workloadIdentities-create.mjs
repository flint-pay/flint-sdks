import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.workloadIdentities.create(
  {
    name: "example",
    issuer: "example",
    subject: "example",
    scopes: ["accounts.api_keys.read"],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.created_by.resource_id);
console.log(result.status);
