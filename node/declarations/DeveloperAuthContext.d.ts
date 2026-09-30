


export type DeveloperAuthContext = ({ "api_key_id"?: string; "auth_type": "api_key" | "oauth" | (string & {}); "context_id"?: string; "environment": "sandbox" | "live" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string; "merchant_id": string; "name"?: string; "oauth_grant_id"?: string; "oauth_session_id"?: string; "organization_id"?: string; "sandbox_id"?: string; "scopes": Array<string>; });
