
import type { CreditNote } from './CreditNote.js';
import type { CreditNoteAllocation } from './CreditNoteAllocation.js';
import type { Invoice } from './Invoice.js';

/** The allocation, the credit note with its new unallocated_money, and the recomputed invoice. */ export type CreditNoteAllocationResult = { "credit_note": CreditNote; "credit_note_allocation": CreditNoteAllocation; "invoice": Invoice; };
