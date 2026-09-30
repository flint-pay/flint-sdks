


export type CancelReturnDispositionRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {}); "reason_message"?: string; };
