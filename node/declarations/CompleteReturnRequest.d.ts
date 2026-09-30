


export type CompleteReturnRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason"?: "manual_completion" | "exception_waived" | "other" | (string & {}); "reason_message"?: string; };
