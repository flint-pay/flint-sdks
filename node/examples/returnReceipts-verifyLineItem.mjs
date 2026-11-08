import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.returnReceipts.verifyLineItem(
  "retrc_01KEZF7C0052GWDW41D9AJAVJZ",
  "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE",
  {
    expected_version: 1,
    return_line_item_id: "retli_01KEZF7C001NHF6JPD83VD0MRK",
    verification_reason: "sku_match_confirmed",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.receiving_location_id);
console.log(result.return_id);
