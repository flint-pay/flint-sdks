import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.orders.removeGiftCard(
  "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    expected_version: 1,
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.order_id);
console.log(result.status);
