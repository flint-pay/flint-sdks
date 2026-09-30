


export type VoidPackageRequest = { /** Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. */ "buyer_notification_behavior"?: "send" | "suppress" | (string & {}); /** Optional resource version last read by the caller. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** Void event timestamp. Format: date-time. */ "occurred_at"?: string; "reason"?: string; };
