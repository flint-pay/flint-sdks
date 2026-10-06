


export type FulfillmentTransitionRequestSchedule = { "action": "schedule" | (string & {}); "buyer_notification_behavior"?: "send" | "suppress" | (string & {}); /** Resource version the caller last read. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string; /** Your note explaining this transition. maxLength: 500. */ "reason_message"?: string; /** RFC3339 timestamp. Format: date-time. */ "scheduled_end_at": string; /** RFC3339 timestamp. Format: date-time. */ "scheduled_start_at": string; /** IANA timezone of the service appointment. */ "timezone"?: string; };
