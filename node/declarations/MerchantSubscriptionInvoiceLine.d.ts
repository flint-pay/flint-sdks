
import type { MoneyValue } from './MoneyValue.js';

export type MerchantSubscriptionInvoiceLine = { "amount_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "description": string; "line_type": "subscription" | "credit" | (string & {}); "merchant_subscription_invoice_line_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "unit_amount_money": MoneyValue; };
