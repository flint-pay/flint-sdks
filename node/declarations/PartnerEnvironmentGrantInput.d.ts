


export type PartnerEnvironmentGrantInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "environment_grant_id": string; "environment_id"?: string; "granted_scopes": Array<string>; "mode": "test" | "live"; /** RFC3339 timestamp. Format: date-time. */ "revoked_at"?: string | globalThis.Date; "revoked_by_user_id"?: string; "status": "pending_exchange" | "active" | "revoked"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; };
