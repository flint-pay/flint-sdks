import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.modifierGroups.update(
  "mg_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    name: "Add-ons",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.modifier_group_id);
console.log(result.status);
