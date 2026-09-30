


export type CapabilityRequirements = { /** RFC3339 timestamp. Format: date-time. */ "current_deadline_at"?: string; "currently_due_fields"?: Array<string>; /** Normalized reason the related account requirements currently disable or block the capability. */ "disabled_reason"?: "account_attention_required" | "account_paused" | "account_rejected" | "account_requirements_due" | "account_under_review" | "requirements_past_due" | "requirements_pending_verification" | null | (string & {}) | null; "eventually_due_fields"?: Array<string>; "past_due_fields"?: Array<string>; "pending_verification_fields"?: Array<string>; };
