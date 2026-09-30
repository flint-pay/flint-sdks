


export type CreateCustomerSessionRequest = { /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 60. maximum: 3600. */ "account_url_expires_in_seconds"?: string; "customer_id": string; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 300. maximum: 86400. */ "expires_in_seconds"?: string; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 3600. maximum: 2592000. */ "refresh_expires_in_seconds"?: string; };
