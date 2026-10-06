


export type ExpandedPaymentLinkSummary = { /** Format: int32. */ "completed_count": number; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "description"?: string; "name": string; "payment_link_id": string; "payment_link_type"?: "standard" | "donation" | "event" | (string & {}); "status": "active" | "inactive" | (string & {}); "subscription_plan_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; "url"?: string; };
