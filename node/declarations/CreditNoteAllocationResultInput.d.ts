
import type { CreditNoteAllocationInput } from './CreditNoteAllocationInput.js';
import type { CreditNoteInput } from './CreditNoteInput.js';
import type { InvoiceInput } from './InvoiceInput.js';

/** The allocation, the credit note with its new unallocated_money, and the recomputed invoice. */ export type CreditNoteAllocationResultInput = { "credit_note": CreditNoteInput; "credit_note_allocation": CreditNoteAllocationInput; "invoice": InvoiceInput; };
