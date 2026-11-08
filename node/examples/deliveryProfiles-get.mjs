import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.deliveryProfiles.get(
  "dprof_01KEZF7C0020J13FQYNY9854R0"
);
console.log(result.current_delivery_profile_revision_id);
console.log(result.delivery_profile_id);
