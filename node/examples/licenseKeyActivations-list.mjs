import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.licenseKeyActivations.list(
  {
    license_key_id: "lk_01KEZF7C000QD7VJ83G43V0NSN",
  }
);
console.log(result.request_id);
