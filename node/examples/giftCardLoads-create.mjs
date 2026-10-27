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
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardLoads.create(
  "example",
  {
    consideration_money: {
      amount: "100",
      currency: "USD",
    },
    source: {
      customer_id: "example",
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
