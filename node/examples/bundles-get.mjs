import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.bundles.get(
  "bun_01KEZF7C00TQ6S76Z6CVQF5SVN"
);
console.log(result.bundle_id);
console.log(result.status);
