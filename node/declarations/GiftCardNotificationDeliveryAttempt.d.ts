


export type GiftCardNotificationDeliveryAttempt = { /** Use an exact numeric string, not a floating-point number. Format: int64. */ "attempt_number": string; /** RFC3339 timestamp. Format: date-time. */ "completed_at"?: string; "delivery_attempt_id": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "provider_status_code"?: string; /** RFC3339 timestamp. Format: date-time. */ "started_at": string; "status": "started" | "sent" | "failed" | "abandoned" | (string & {}); };
