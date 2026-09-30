


export type InvoiceScheduleDue = ({ /** RFC3339 timestamp. Format: date-time. */ "due_at"?: string; "type": "at_issue" | "date" | "invoice_due_date" | (string & {}); }) & ((({ "type": "at_issue"; })) | ({ "type": "date"; "due_at": unknown; }) | (({ "type": "invoice_due_date"; })) | (object));
