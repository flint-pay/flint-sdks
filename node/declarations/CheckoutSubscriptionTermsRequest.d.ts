


export type CheckoutSubscriptionTermsRequest = ({ "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {}); /** minimum: 1. maximum: 365. */ "billing_interval_count"?: number; /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */ "quantity"?: number; });
