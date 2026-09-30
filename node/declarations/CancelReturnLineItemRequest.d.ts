


export type CancelReturnLineItemRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "handback_quantity": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other" | (string & {}); "reason_message"?: string; };
