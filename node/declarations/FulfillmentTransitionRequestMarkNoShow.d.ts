


export type FulfillmentTransitionRequestMarkNoShow = { "action": "mark_no_show" | (string & {}); "buyer_notification_behavior"?: "send" | "suppress" | (string & {}); /** Resource version the caller last read. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string; "reason": "customer_no_show" | "provider_no_show" | "location_unavailable" | "scheduling_error" | "other" | (string & {}); };
