


export type UpdateInventoryLevelRequest = { /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "safety_stock_quantity": string; };
