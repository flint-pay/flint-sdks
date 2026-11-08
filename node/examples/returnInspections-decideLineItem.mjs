import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnInspections.decideLineItem(
  "retins_01KEZF7C00WPB0BR4WTT7CMSB8",
  "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4",
  {
    acceptance_decision_reason: "manual_review",
    acceptance_status: "accepted",
    expected_version: 1,
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inspection_location_id);
console.log(result.return_id);
