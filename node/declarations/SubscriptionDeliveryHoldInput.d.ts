


export type SubscriptionDeliveryHoldInput = { /** RFC3339 timestamp. Format: date-time. */ "ends_at": string | globalThis.Date; "fixable_by": "buyer" | "merchant"; "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable"; /** RFC3339 timestamp. Format: date-time. */ "started_at": string | globalThis.Date; };
