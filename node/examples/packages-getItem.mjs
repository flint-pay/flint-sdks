import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.packages.getItem(
  "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R",
  "pki_01KEZF7C00CEFTYV5RD7XVYQ7B"
);
console.log(result.fulfillment_id);
console.log(result.order_id);
