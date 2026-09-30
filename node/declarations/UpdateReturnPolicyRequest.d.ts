


export type UpdateReturnPolicyRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string | null; /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all metadata. An empty object makes no change. Empty strings are stored. Keys starting with flint_ are reserved and cannot be written through the public API. */ "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive" | (string & {}); };
