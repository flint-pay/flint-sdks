


export type FulfillmentTransitionRequestHoldInput = { "action": "hold"; "buyer_notification_behavior"?: "send" | "suppress"; /** Resource version the caller last read. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string | globalThis.Date; "reason": "payment_review" | "inventory_issue" | "address_issue" | "customer_request" | "provider_issue" | "scheduling_issue" | "fraud_review" | "other"; };
