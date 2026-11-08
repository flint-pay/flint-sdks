import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const customerToken = process.env.CUSTOMER_TOKEN;
if (!customerToken) throw new Error("Set CUSTOMER_TOKEN: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
  customerToken,
});
const result = await client.me.getSubscriptionPaymentRetry(
  "sub_01KEZF7C00BVRE8YDBXQB74BBM",
  "spr_01KEZF7C00YXMSBXGYEMYDD0AA"
);
console.log(result.status);
console.log(result.subscription_id);
