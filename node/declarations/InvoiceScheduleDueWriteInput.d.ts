


export type InvoiceScheduleDueWriteInput = ({ /** When this entry is due. Required for `date`. Not accepted for `at_issue` or `invoice_due_date`, which Flint resolves when the invoice is issued. Format: date-time. */ "due_at"?: string | globalThis.Date; "type": "at_issue" | "date" | "invoice_due_date"; }) & ((({ "type": "at_issue"; }) & ({ "due_at"?: never })) | ({ "type": "date"; "due_at": unknown; }) | (({ "type": "invoice_due_date"; }) & ({ "due_at"?: never })));
