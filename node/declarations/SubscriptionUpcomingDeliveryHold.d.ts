


export type SubscriptionUpcomingDeliveryHold = { /** RFC3339 timestamp. Format: date-time. */ "detected_at": string; "fixable_by": "buyer" | "merchant" | (string & {}); "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {}); /** Time of the next renewal affected by this delivery issue. Format: date-time. */ "renewal_at": string; };
