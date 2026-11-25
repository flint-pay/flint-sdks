import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shops.resolve(
  "shop_01KEZF7C005VQBPV4FZHDZPAHE",
  {
    line_items: [
      {
        quantity: 2,
        shop_listing_id: "shl_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      },
    ],
    resolution_context: "shrc_v1.example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.checkout_session_id);
console.log(result.order_id);
