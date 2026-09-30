


export type InvoiceDeliveryAttempt = { "cc_emails"?: Array<string>; "channel": "email" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "delivery_type": "send" | "reminder" | (string & {}); "error_message"?: string; "invoice_delivery_attempt_id": string; /** RFC3339 timestamp. Format: date-time. */ "sent_at"?: string; "status": "pending" | "sent" | "failed" | "suppressed" | (string & {}); "to_email": string; };
