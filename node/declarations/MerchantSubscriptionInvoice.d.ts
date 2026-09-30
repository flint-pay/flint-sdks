
import type { MerchantSubscriptionInvoiceLine } from './MerchantSubscriptionInvoiceLine.js';
import type { MoneyValue } from './MoneyValue.js';

export type MerchantSubscriptionInvoice = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "credit_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "due_at": string; "invoice_number": string; /** RFC3339 timestamp. Format: date-time. */ "issued_at"?: string; "lines": Array<MerchantSubscriptionInvoiceLine>; "merchant_subscription_invoice_id": string; "outstanding_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "paid_at"?: string; "period_end": string; "period_start": string; "status": "draft" | "open" | "collecting" | "paid" | "delinquent" | "void" | "written_off" | (string & {}); "subtotal_money": MoneyValue; "total_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; /** RFC3339 timestamp. Format: date-time. */ "voided_at"?: string; };
