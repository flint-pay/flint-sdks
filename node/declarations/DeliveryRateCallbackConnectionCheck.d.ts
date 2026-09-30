


export type DeliveryRateCallbackConnectionCheck = { /** RFC3339 timestamp. Format: date-time. */ "checked_at": string; "delivery_rate_callback_id": string; "delivery_rate_callback_revision_id": string; "failure_category"?: "connection_failed" | "authentication_or_http_error" | (string & {}); "http_status_code"?: number; "key_id": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "latency_milliseconds": string; "status": "succeeded" | "failed" | (string & {}); };
