


export type CreatePromotionCodeRequest = { "code": string; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "max_uses"?: string; "metadata"?: Record<string, string>; "timezone"?: string; };
