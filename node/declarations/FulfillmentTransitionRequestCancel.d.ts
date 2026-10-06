


export type FulfillmentTransitionRequestCancel = { "action": "cancel" | (string & {}); "buyer_notification_behavior"?: "send" | "suppress" | (string & {}); /** Resource version the caller last read. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** Your note explaining this transition. maxLength: 500. */ "reason_message"?: string; };
