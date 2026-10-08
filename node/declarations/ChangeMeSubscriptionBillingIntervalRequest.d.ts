


export type ChangeMeSubscriptionBillingIntervalRequest = { "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {}); /** minimum: 1. maximum: 365. */ "billing_interval_count": number; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; };
