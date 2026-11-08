import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.workloadIdentities.get(
  "wid_01KEZF7C00GKCN7Y1482VY8TWP"
);
console.log(result.created_by.resource_id);
console.log(result.status);
