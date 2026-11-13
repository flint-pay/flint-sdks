import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantSignups.verify(
  "msu_01KEZF7C00SRGYRMBPKRKW8V9J",
  {
    expected_version: 1,
    terms_acceptance: {
      ip_address: "203.0.113.7",
      merchant_terms_version: "2026-10-01",
      user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 15_1) AppleWebKit/605.1.15",
    },
    verification_code: "K7QM-4TXD",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
