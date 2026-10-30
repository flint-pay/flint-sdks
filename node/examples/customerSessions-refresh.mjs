import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const customerSessionId = "cses_01ARZ3NDEKTSV4RRFFQ69G5FAV";
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = `refresh-${customerSessionId}`;

const result = await client.customerSessions.refresh(
  {
    refresh_token: "example",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
