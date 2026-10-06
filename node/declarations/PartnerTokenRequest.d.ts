


export type PartnerTokenRequest = { "client_id": string; "client_secret": string; "code"?: string; "grant_type": "authorization_code" | "refresh_token" | (string & {}); "redirect_uri"?: string; "refresh_token"?: string; };
