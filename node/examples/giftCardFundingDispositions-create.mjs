import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardFundingDispositions.create(
  {
    dispute_id: "du_00000000000000000000000000",
    reason_message: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.dispute_id);
console.log(result.gift_card_funding_disposition_id);
