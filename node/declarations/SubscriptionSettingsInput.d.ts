


export type SubscriptionSettingsInput = { "default_billing_schedule_owner"?: "flint" | "external"; "dunning_end_action"?: "cancel" | "pause" | "notify_only"; /** Format: int32. */ "dunning_retry_days"?: number; "external_dunning_end_action"?: "cancel" | "pause" | "notify_only"; };
