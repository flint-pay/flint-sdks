


export type PaymentLinkEventConfigInput = { /** RFC3339 timestamp. Format: date-time. */ "event_at"?: string | globalThis.Date; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "max_total_quantity"?: number; "send_ticket_emails"?: boolean; /** maxLength: 5. */ "ticket_prefix"?: string; "timezone"?: string; /** maxLength: 500. */ "venue"?: string; };
