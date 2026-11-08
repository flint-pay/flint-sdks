import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.products.getOption(
  "prod_01KEZF7C00BVSHCNWVH528HB66",
  "opt_01KEZF7C008R5Q9BG9B4B4KQH8"
);
console.log(result.option_id);
console.log(result.product_id);
