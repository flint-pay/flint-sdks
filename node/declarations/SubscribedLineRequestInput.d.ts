


export type SubscribedLineRequestInput = { "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; /** Format: int32. minimum: 1. maximum: 365. */ "billing_interval_count": number; /** Active subscription offer for this catalog variant. minLength: 1. */ "subscription_offer_id": string; };
