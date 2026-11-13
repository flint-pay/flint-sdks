import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.acceptPlatformTerms(
  "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV",
  {
    expected_version: 1,
    platform_terms_version: "2026-11-12",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.client_id);
console.log(result.partner_app_id);
