


export type SubscriptionIntervalOption = { "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {}); /** minimum: 1. maximum: 365. */ "billing_interval_count": number; };
