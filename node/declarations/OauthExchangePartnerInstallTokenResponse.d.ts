


export type OauthExchangePartnerInstallTokenResponse = (({ "access_token": string; "environment_grant_id": string; "expires_in": string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_id": string; "partner_app_install_id": string; "refresh_token"?: string; "scope"?: string; "token_type": string; }) | (({ "access_token": string; "context_id"?: string; "expires_in": number; "oauth_session_id"?: string; "refresh_token": string; "scope": string; "token_type": "Bearer" | (string & {}); })) | (object));
