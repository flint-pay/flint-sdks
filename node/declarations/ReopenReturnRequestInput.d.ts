


export type ReopenReturnRequestInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "linked_effect_changed" | "correction_required" | "additional_merchandise_received" | "merchant_request" | "other"; "reason_message"?: string; };
