import { Client } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnInspections.decideLineItem(
  "example",
  "example",
  {
    acceptance_decision_reason: "inspection_result",
    acceptance_status: "accepted",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.inspection_location_id);
console.log(result.return_id);
