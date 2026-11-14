import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const checkoutToken = process.env.CHECKOUT_TOKEN;
if (!checkoutToken) throw new Error("Set CHECKOUT_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  checkoutToken,
});
const result = await client.checkoutSessions.listCustomerVerifications(
  "cs_01KEZF7C004JRWFW43H037MQRN"
);
console.log(result.request_id);
