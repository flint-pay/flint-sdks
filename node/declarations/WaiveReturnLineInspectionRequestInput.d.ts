


export type WaiveReturnLineInspectionRequestInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other"; "reason_message"?: string; };
