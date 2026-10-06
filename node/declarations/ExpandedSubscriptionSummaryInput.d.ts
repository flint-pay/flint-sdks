


export type ExpandedSubscriptionSummaryInput = { /** Format: int32. */ "billing_anchor_day": number; "cancel_at_period_end": boolean; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "current_period_end"?: string; "current_period_start"?: string; "customer_id": string; /** RFC3339 timestamp. Format: date-time. */ "next_billing_at"?: string | globalThis.Date; "status": "trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete"; "subscription_id": string; "subscription_plan_id": string; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
