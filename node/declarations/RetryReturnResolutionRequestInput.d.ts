


export type RetryReturnResolutionRequestInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other"; "reason_message"?: string; };
