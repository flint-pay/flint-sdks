


export type MerchantReadinessRequirementsInput = { /** RFC3339 timestamp. Format: date-time. */ "current_deadline_at"?: string | globalThis.Date; "currently_due": Array<string>; "disabled_reason"?: "account_attention_required" | "account_paused" | "account_rejected" | "account_requirements_due" | "account_under_review" | "requirements_past_due" | "requirements_pending_verification" | null; "eventually_due": Array<string>; "past_due": Array<string>; "pending_verification": Array<string>; };
