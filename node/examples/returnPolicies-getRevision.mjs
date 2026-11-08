import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.returnPolicies.getRevision(
  "rpol_01KEZF7C00H8C042BEK6HBRANX",
  "rpolv_01KEZF7C007AWH6P4QC14Q25TC"
);
console.log(result.return_policy_id);
console.log(result.return_policy_revision_id);
