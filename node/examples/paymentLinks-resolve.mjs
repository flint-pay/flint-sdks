import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.paymentLinks.resolve(
  "pl_01KEZF7C007WDMA5P9BPZ8J2AM",
  {
    resolution_context: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
