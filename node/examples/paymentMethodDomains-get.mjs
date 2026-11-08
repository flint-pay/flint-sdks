import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.paymentMethodDomains.get(
  "pmdom_01KEZF7C001WQCSRGH9GWR6628"
);
console.log(result.payment_method_domain_id);
console.log(result.status);
