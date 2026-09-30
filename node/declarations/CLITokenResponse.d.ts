


export type CLITokenResponse = ({ /** minLength: 1. */ "access_token": string; /** minLength: 1. */ "context_id"?: string; /** minimum: 1. maximum: 86400. */ "expires_in": number; /** minLength: 1. */ "oauth_session_id"?: string; /** minLength: 1. */ "refresh_token": string; /** minLength: 1. */ "scope": string; "token_type": "Bearer" | (string & {}); });
