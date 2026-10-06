


export type PartnerTokenResponse = { "access_token": string; "environment_grant_id": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "expires_in": string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_id": string; "partner_app_install_id": string; "refresh_token"?: string; "scope"?: string; "token_type": "bearer" | (string & {}); };
