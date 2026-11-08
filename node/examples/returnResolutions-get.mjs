import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.returnResolutions.get(
  "retres_01KEZF7C00C7RZJN31W9SGMEQ3"
);
console.log(result.return_id);
console.log(result.return_resolution_id);
