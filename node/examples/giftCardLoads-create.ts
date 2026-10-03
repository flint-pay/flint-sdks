import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardLoads.create(
  "gc_01J00000000000000000000001",
  {
    consideration_money: {
      amount: "1000",
      currency: "USD",
    },
    source: {
      buyer_id: "synthetic-buyer",
      funding_source_type: "external_payment",
      reference_id: "synthetic-funding-reference",
    },
    value_money: {
      amount: "1000",
      currency: "USD",
    },
  },
  { idempotencyKey: idempotencyKey },
);
