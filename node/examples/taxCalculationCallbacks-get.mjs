import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.taxCalculationCallbacks.get(
  "tcb_01KEZF7C00N7SER74Y2E6D1ZGT"
);
console.log(result.current_tax_calculation_callback_revision_id);
console.log(result.status);
