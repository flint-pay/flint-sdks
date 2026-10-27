import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  apiKey,
});
const result = await client.creditNotes.getPDF(
  "example"
);
// Choose a destination path; PDF bytes must not be decoded as text.
const resultPath = process.env.API_DOWNLOAD_PATH ?? "download.pdf";
await (await import("node:fs/promises")).writeFile(resultPath, result.data);
console.log("Saved", result.data.byteLength, "bytes to", resultPath);
console.log(result.meta.requestId);
