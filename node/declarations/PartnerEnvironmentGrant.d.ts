


export type PartnerEnvironmentGrant = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "environment_grant_id": string; "environment_id"?: string; "granted_scopes": Array<string>; "mode": "test" | "live" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "revoked_at"?: string; "revoked_by_user_id"?: string; "status": "pending_exchange" | "active" | "revoked" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
