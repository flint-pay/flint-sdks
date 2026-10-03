


export type UpdateGiftCardRequest = { /** Omission preserves the association; null clears it. */ "customer_id"?: string | null; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** Caller-owned identifier for this resource in an external system. Omission preserves the association; null clears it. minLength: 1. maxLength: 255. */ "external_reference_id"?: string | null; };
