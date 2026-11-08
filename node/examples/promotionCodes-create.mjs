import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.promotionCodes.create(
  {
    code: "VIP20",
    expires_at: "2026-04-01T00:00:00Z",
    max_uses: 100,
    metadata: {
      audience: "vip",
    },
    promotion_id: "promo_01HZYV7Q9Y0Y4H8Q3H9F6R7T8J",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_id);
console.log(result.promotion_code_id);
