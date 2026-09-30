


export type RetryReturnDispositionRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other" | (string & {}); "reason_message"?: string; };
