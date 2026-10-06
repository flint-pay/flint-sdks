


export type FulfillmentTransitionRequestMarkPickedInput = { "action": "mark_picked"; "buyer_notification_behavior"?: "send" | "suppress"; /** Resource version the caller last read. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string | globalThis.Date; /** Your note explaining this transition. maxLength: 500. */ "reason_message"?: string; };
