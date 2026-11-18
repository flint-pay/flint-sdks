import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.licenseKeys.validate(
  {
    key: "EXAMPLE-LICENSE-KEY-DO-NOT-USE",
    product_ids: ["prod_01KEZF7C00BVSHCNWVH528HB66"],
  }
);
console.log(result);
