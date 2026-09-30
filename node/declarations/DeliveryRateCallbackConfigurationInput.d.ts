


export type DeliveryRateCallbackConfigurationInput = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 1048576. */ "maximum_request_bytes"?: string; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. maximum: 1048576. */ "maximum_response_bytes"?: string; "preview_enabled"?: boolean; "redirect_policy"?: "reject"; /** minimum: 0.1. maximum: 10. */ "request_timeout_seconds"?: number; "url": string; };
