


export type ExpandedPaymentLinkSummaryInput = { /** Format: int32. */ "completed_count": number; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "description"?: string; "name": string; "payment_link_id": string; "payment_link_type"?: "standard" | "donation" | "event"; "status": "active" | "inactive"; "subscription_plan_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; "url"?: string; };
