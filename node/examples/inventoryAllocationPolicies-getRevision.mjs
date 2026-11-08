import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.inventoryAllocationPolicies.getRevision(
  "invp_01KEZF7C0076BZX855WAGC5SQK",
  "invpv_01KEZF7C00JSFTTBKC1JY614JJ"
);
console.log(result.inventory_allocation_policy_id);
console.log(result.inventory_allocation_policy_revision_id);
