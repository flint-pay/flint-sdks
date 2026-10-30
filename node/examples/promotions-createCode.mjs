import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.promotions.createCode(
  "promo_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    code: "VIP20",
    expires_at: "2026-04-01T00:00:00Z",
    max_uses: 100,
    metadata: {
      audience: "vip",
    },
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.promotion_code_id);
console.log(result.promotion_id);
