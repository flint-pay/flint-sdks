
import type { MoneyValueInput } from './MoneyValueInput.js';

/** One credited invoice line, with the discount and tax share Flint derived from the source line. */ export type CreditNoteLineInput = { "credit_note_line_id": string; "description": string; "discount_money": MoneyValueInput; /** The invoice snapshot line this corrects. */ "invoice_line_item_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity"?: string; "subtotal_money": MoneyValueInput; "tax_money": MoneyValueInput; /** What this line credits, discount and tax included. */ "total_money": MoneyValueInput; };
