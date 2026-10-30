import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCards.createLoad(
  "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    consideration_money: {
      amount: "100",
      currency: "USD",
    },
    source: {
      customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      external_reference_id: "example",
      funding_source_type: "external_payment",
    },
    value_money: {
      amount: "100",
      currency: "USD",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.gift_card.gift_card_id);
console.log(result.gift_card.merchant_id);
