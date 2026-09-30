


export type InvoiceScheduleDueInput = ({ /** RFC3339 timestamp. Format: date-time. */ "due_at"?: string | globalThis.Date; "type": "at_issue" | "date" | "invoice_due_date"; }) & ((({ "type": "at_issue"; }) & ({ "due_at"?: never })) | ({ "type": "date"; "due_at": unknown; }) | (({ "type": "invoice_due_date"; }) & ({ "due_at"?: never })));
