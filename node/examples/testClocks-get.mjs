import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.testClocks.get(
  "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ"
);
console.log(result.status);
console.log(result.test_clock_id);
