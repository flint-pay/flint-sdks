


export type UpdatePromotionCodeRequestInput = { /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string | globalThis.Date; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "max_uses"?: string; /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all metadata. An empty object makes no change. Empty strings are stored. Keys starting with flint_ are reserved and cannot be written through the public API. */ "metadata"?: Record<string, string | null> | null; /** Stored code switch. Only active and inactive can be set; expired and exhausted are computed on reads. */ "status"?: "active" | "inactive"; "timezone"?: string; };
