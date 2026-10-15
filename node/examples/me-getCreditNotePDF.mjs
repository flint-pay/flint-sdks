import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const customerToken = process.env.CUSTOMER_TOKEN;
if (!customerToken) throw new Error("Set CUSTOMER_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  customerToken,
});
const result = await client.me.getCreditNotePDF(
  "example",
  "example"
);
// Choose a destination path; PDF bytes must not be decoded as text.
const resultPath = process.env.API_DOWNLOAD_PATH ?? "download.pdf";
await (await import("node:fs/promises")).writeFile(resultPath, result.data);
console.log("Saved", result.data.byteLength, "bytes to", resultPath);
console.log(result.meta.requestId);
