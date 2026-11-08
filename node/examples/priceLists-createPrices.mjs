import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.priceLists.createPrices(
  "prl_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  {
    prices: [
      {
        unit_price_money: {
          amount: "800",
          currency: "USD",
        },
        variant_id: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV",
      },
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.price_list.merchant_id);
console.log(result.price_list.price_list_id);
