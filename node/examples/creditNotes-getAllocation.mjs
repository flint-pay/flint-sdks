import { Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});
const result = await client.creditNotes.getAllocation(
  "example",
  "example"
);
console.log(result.credit_note_allocation_id);
console.log(result.credit_note_id);
