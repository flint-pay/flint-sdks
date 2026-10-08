


export type UpdateSubscriptionLineItemRequest = { /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999. */ "quantity"?: number; /** pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */ "variant_id"?: string; };
