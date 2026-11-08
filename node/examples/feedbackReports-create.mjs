import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.feedbackReports.create(
  {
    kind: "feature_request",
    reporter_kind: "human",
    summary: "Show the remaining credit before a refund",
    surface: "api",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.feedback_report_id);
