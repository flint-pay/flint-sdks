import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.priceLists.deletePrice(
  "prl_01KEZF7C00EH39P59GN3XMGS2Q",
  "prlp_01KEZF7C007DQ721A29CDR73DN",
  {},
  { idempotencyKey: idempotencyKey },
);
console.log(result.merchant_id);
console.log(result.price_list_id);
