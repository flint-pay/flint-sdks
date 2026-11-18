import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.licenseKeyActivations.get(
  "lka_01KEZF7C00NZEZVCZW3SRDMHTZ"
);
console.log(result.license_key_activation_id);
console.log(result.license_key_id);
