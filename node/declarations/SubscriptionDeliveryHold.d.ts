


export type SubscriptionDeliveryHold = { /** RFC3339 timestamp. Format: date-time. */ "ends_at": string; "fixable_by": "buyer" | "merchant" | (string & {}); "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "started_at": string; };
