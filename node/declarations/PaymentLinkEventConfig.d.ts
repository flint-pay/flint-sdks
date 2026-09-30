


export type PaymentLinkEventConfig = { /** RFC3339 timestamp. Format: date-time. */ "event_at"?: string; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "max_total_quantity"?: number; "send_ticket_emails"?: boolean; "ticket_prefix"?: string; "timezone"?: string; "venue"?: string; };
