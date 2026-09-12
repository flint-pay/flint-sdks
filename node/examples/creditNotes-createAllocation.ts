import { Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});
// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.createAllocation(
  "example",
  {
    amount_money: {
      amount: "0",
      currency: "USD",
    },
    "Idempotency-Key": idempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(result.credit_note.credit_note_id);
console.log(result.credit_note.invoice_id);
