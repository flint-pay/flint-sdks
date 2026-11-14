import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const checkoutToken = process.env.CHECKOUT_TOKEN;
if (!checkoutToken) throw new Error("Set CHECKOUT_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  checkoutToken,
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.rememberedBuyers.revoke(
  {
    remembered_buyer_token: "rbt_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result.remembered_buyer_id);
