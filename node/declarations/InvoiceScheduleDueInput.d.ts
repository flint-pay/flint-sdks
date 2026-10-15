


export type InvoiceScheduleDueInput = ({ /** When this entry is due. Always set for `date`. For `at_issue` and `invoice_due_date`, absent on a draft and set when the invoice is issued: the issue time for `at_issue` and the invoice's `due_at` for `invoice_due_date`. Format: date-time. */ "due_at"?: string | globalThis.Date; "type": "at_issue" | "date" | "invoice_due_date"; }) & (({ "type": "at_issue"; }) | ({ "type": "date"; "due_at": unknown; }) | ({ "type": "invoice_due_date"; }));
