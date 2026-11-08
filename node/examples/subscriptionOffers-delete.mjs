import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.subscriptionOffers.delete(
  "soffer_01KEZF7C00KAA9Y1X1KM70YFAA",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.status);
console.log(result.subscription_offer_id);
