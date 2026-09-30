
import type { InvoiceLateFeePolicyInput } from './InvoiceLateFeePolicyInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';

export type InvoiceLateFeeInput = { "amount_money": MoneyValueInput; /** RFC3339 timestamp. Format: date-time. */ "assessed_at": string | globalThis.Date; "base_outstanding_money": MoneyValueInput; "invoice_late_fee_id": string; "invoice_schedule_entry_id"?: string; "late_fee_policy"?: InvoiceLateFeePolicyInput; "outstanding_money": MoneyValueInput; "paid_money": MoneyValueInput; /** RFC3339 timestamp. Format: date-time. */ "waived_at"?: string | globalThis.Date; "waived_money": MoneyValueInput; "waiver_reason"?: string; "written_off_money": MoneyValueInput; };
