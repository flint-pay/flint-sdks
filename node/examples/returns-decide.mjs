import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returns.decide(
  "ret_00000000000000000000000000",
  {
    line_items: [
      {
        approved_quantity: 1,
        receiving_location_id: "loc_00000000000000000000000000",
        return_line_item_id: "retli_00000000000000000000000000",
      },
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.order_id);
console.log(result.return_id);
