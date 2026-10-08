


export type ChangeMeSubscriptionQuantityRequest = { /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */ "quantity": number; };
