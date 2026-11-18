import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.licenseKeys.lookup(
  {
    key: "EXAMPLE-LICENSE-KEY-DO-NOT-USE",
  }
);
console.log(result.license_key_id);
console.log(result.product_id);
