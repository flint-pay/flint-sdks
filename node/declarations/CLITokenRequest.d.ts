


export type CLITokenRequest = ({ "client_id": "flint-cli" | (string & {}); "context_id"?: string; "device_code"?: string; "grant_type": "urn:ietf:params:oauth:grant-type:device_code" | "refresh_token" | (string & {}); "refresh_token"?: string; "scope"?: string; }) & (({ "grant_type"?: unknown; "device_code": unknown; }) | ({ "grant_type"?: unknown; "refresh_token": unknown; }) | (object));
