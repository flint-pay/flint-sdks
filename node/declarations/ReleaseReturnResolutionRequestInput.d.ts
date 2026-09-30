


export type ReleaseReturnResolutionRequestInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "merchant_approved" | "exception_resolved" | "other"; "reason_message"?: string; };
