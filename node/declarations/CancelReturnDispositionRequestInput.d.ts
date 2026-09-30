


export type CancelReturnDispositionRequestInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other"; "reason_message"?: string; };
