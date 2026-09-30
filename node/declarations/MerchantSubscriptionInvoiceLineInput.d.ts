
import type { MoneyValueInput } from './MoneyValueInput.js';

export type MerchantSubscriptionInvoiceLineInput = { "amount_money": MoneyValueInput; /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; "description": string; "line_type": "subscription" | "credit"; "merchant_subscription_invoice_line_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "unit_amount_money": MoneyValueInput; };
