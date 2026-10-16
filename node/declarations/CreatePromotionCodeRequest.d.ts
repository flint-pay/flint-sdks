


export type CreatePromotionCodeRequest = { "code": string; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "max_uses"?: string; "metadata"?: Record<string, string>; /** IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. */ "timezone"?: string; };
