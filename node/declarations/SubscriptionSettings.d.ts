


export type SubscriptionSettings = { "default_billing_schedule_owner"?: "flint" | "external" | (string & {}); "dunning_end_action"?: "cancel" | "pause" | "notify_only" | (string & {}); /** Format: int32. */ "dunning_retry_days"?: number; "external_dunning_end_action"?: "cancel" | "pause" | "notify_only" | (string & {}); "send_backordered_email"?: boolean; };
