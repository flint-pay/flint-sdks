import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
const result = await client.creditNotes.getAllocation(
  "cn_01KEZF7C00N1TRRCVDNY8S471H",
  "cna_01KEZF7C00EH6DMS9BD8F72CMA"
);
console.log(result.credit_note_allocation_id);
console.log(result.credit_note_id);
