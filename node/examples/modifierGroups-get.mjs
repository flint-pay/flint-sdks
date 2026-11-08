import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.modifierGroups.get(
  "mg_01KEZF7C00XKJJATARG7KDBYM9"
);
console.log(result.modifier_group_id);
console.log(result.status);
