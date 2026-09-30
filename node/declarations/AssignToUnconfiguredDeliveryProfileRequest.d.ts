


export type AssignToUnconfiguredDeliveryProfileRequest = { /** Optional catalog settings version. When provided, the profile must still be the current catalog default. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_catalog_default_version"?: string; /** Current version of the delivery profile. Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "expected_version"?: string; };
