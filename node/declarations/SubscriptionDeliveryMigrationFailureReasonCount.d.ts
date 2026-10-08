


export type SubscriptionDeliveryMigrationFailureReasonCount = { /** Use an exact numeric string, not a floating-point number. Format: int64. */ "count": string; "reason": "method_not_offered" | "destination_not_served" | "rate_unavailable" | "method_unavailable" | "no_longer_applicable" | "not_movable" | (string & {}); };
