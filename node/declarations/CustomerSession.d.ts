


export type CustomerSession = { "account_url"?: string; /** RFC3339 expiration instant. Format: date-time. */ "account_url_expires_at"?: string | null; "customer_id": string; "customer_session_id": string; /** RFC3339 expiration instant. Format: date-time. */ "expires_at": string; "refresh_token": string; /** RFC3339 expiration instant. Format: date-time. */ "refresh_token_expires_at": string; "secret": string; };
