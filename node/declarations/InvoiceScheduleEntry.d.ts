
import type { InvoiceScheduleAmountSpecification } from './InvoiceScheduleAmountSpecification.js';
import type { InvoiceScheduleDue } from './InvoiceScheduleDue.js';
import type { MoneyValue } from './MoneyValue.js';

export type InvoiceScheduleEntry = { "amount_specification": InvoiceScheduleAmountSpecification; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "credit_money": MoneyValue; "due": InvoiceScheduleDue; "invoice_schedule_entry_id": string; "kind": "deposit" | "installment" | "balance" | (string & {}); /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "outstanding_money": MoneyValue; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "paid_money": MoneyValue; "status": "pending" | "due" | "partially_satisfied" | "satisfied" | "overdue" | (string & {}); /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "total_money": MoneyValue; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "written_off_money": MoneyValue; };
