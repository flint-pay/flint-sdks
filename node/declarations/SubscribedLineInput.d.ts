


export type SubscribedLineInput = { "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; /** Format: int32. */ "billing_interval_count": number; /** Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. */ "recurring_amount_money"?: never; "subscription_offer_id": string; };
