import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.organizations.get(
  "org_01ARZ3NDEKTSV4RRFFQ69G5FAV"
);
console.log(result.organization_id);
console.log(result.status);
