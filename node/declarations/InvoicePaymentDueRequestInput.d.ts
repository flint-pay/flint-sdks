


export type InvoicePaymentDueRequestInput = ({ /** RFC3339 timestamp. Format: date-time. */ "due_at"?: string | globalThis.Date; "invoice_payment_term_id"?: string; "type": "none" | "absolute" | "payment_terms" | "customer_default" | "merchant_default"; }) & ((({ "type"?: "none"; }) & (({ "due_at"?: never }) & ({ "invoice_payment_term_id"?: never }))) | (({ "type"?: "absolute"; "due_at": unknown; }) & ({ "invoice_payment_term_id"?: never })) | (({ "type"?: "payment_terms"; "invoice_payment_term_id": unknown; }) & ({ "due_at"?: never })) | (({ "type"?: "customer_default"; }) & (({ "due_at"?: never }) & ({ "invoice_payment_term_id"?: never }))) | (({ "type"?: "merchant_default"; }) & (({ "due_at"?: never }) & ({ "invoice_payment_term_id"?: never }))));
