


export type InvoiceDeliveryAttemptInput = { "cc_emails"?: Array<string>; "channel": "email"; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "delivery_type": "send" | "reminder"; "error_message"?: string; "invoice_delivery_attempt_id": string; /** RFC3339 timestamp. Format: date-time. */ "sent_at"?: string | globalThis.Date; "status": "pending" | "sent" | "failed" | "suppressed"; "to_email": string; };
