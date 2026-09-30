


export type CLITokenRequestInput = ({ "client_id": "flint-cli"; "context_id"?: string; "device_code"?: string; "grant_type": "urn:ietf:params:oauth:grant-type:device_code" | "refresh_token"; "refresh_token"?: string; "scope"?: string; }) & (({ "grant_type"?: ("urn:ietf:params:oauth:grant-type:device_code") & ("urn:ietf:params:oauth:grant-type:device_code"); "device_code": unknown; }) | ({ "grant_type"?: ("refresh_token") & ("refresh_token"); "refresh_token": unknown; })) & ({ "client_secret"?: never });
