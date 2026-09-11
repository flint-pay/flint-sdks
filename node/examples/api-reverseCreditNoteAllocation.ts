import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});
const result = await client.api.reverseCreditNoteAllocation(
  {
    credit_note_id: "example",
    credit_note_allocation_id: "example",
  },
  { maxAttempts: 1 },
);
console.log(result.data.data.credit_note.credit_note_id);
console.log(result.data.data.credit_note.invoice_id);
console.log(result.meta.requestId);
