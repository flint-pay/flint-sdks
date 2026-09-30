
import type { InvoiceLateFeePolicy } from './InvoiceLateFeePolicy.js';
import type { MoneyValue } from './MoneyValue.js';

export type BuyerInvoiceLateFee = { "amount_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "assessed_at": string; "base_outstanding_money": MoneyValue; "invoice_late_fee_id": string; "invoice_schedule_entry_id"?: string; "late_fee_policy"?: InvoiceLateFeePolicy; "outstanding_money": MoneyValue; "paid_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "waived_at"?: string; "waived_money": MoneyValue; "written_off_money": MoneyValue; };
