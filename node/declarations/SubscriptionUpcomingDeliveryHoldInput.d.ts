


export type SubscriptionUpcomingDeliveryHoldInput = { /** RFC3339 timestamp. Format: date-time. */ "detected_at": string | globalThis.Date; "fixable_by": "buyer" | "merchant"; "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable"; /** Time of the next renewal affected by this delivery issue. Format: date-time. */ "renewal_at": string | globalThis.Date; };
