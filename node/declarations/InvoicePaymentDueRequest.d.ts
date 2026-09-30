


export type InvoicePaymentDueRequest = ({ /** RFC3339 timestamp. Format: date-time. */ "due_at"?: string; "invoice_payment_term_id"?: string; "type": "none" | "absolute" | "payment_terms" | "customer_default" | "merchant_default" | (string & {}); }) & ((({ "type"?: "none"; })) | (({ "type"?: "absolute"; "due_at": unknown; })) | (({ "type"?: "payment_terms"; "invoice_payment_term_id": unknown; })) | (({ "type"?: "customer_default"; })) | (({ "type"?: "merchant_default"; })) | (object));
