
import type { MoneyValue } from './MoneyValue.js';

/** One credited invoice line, with the discount and tax share Flint derived from the source line. */ export type CreditNoteLine = { "credit_note_line_id": string; "description": string; "discount_money": MoneyValue; /** The invoice snapshot line this corrects. */ "invoice_line_item_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity"?: string; "subtotal_money": MoneyValue; "tax_money": MoneyValue; /** What this line credits, discount and tax included. */ "total_money": MoneyValue; };
