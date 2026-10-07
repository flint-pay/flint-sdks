
import type { MoneyValue } from './MoneyValue.js';

/** One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. */ export type CreditNoteAllocation = { /** RFC3339 timestamp. Format: date-time. */ "allocated_at": string; /** Credit applied to the invoice balance. */ "amount_money": MoneyValue; "credit_note_allocation_id": string; "credit_note_id": string; /** The key the caller sent when allocating. It is this allocation's identity and is filterable on the allocations list. */ "idempotency_key": string; "invoice_id": string; /** When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: date-time. */ "reversed_at"?: string; };
