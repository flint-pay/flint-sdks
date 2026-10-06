


export type FulfillmentTransitionRequestScheduleInput = { "action": "schedule"; "buyer_notification_behavior"?: "send" | "suppress"; /** Resource version the caller last read. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at"?: string | globalThis.Date; /** Your note explaining this transition. maxLength: 500. */ "reason_message"?: string; /** RFC3339 timestamp. Format: date-time. */ "scheduled_end_at": string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "scheduled_start_at": string | globalThis.Date; /** IANA timezone of the service appointment. */ "timezone"?: string; };
