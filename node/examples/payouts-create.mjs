import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.payouts.create(
  {
    amount_money: {
      amount: "100",
      currency: "USD",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_id);
console.log(result.payout_id);
