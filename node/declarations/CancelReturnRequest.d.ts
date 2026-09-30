


export type CancelReturnRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other" | (string & {}); "reason_message"?: string; };
