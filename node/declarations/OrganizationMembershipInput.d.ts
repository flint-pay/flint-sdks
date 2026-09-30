


export type OrganizationMembershipInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string | globalThis.Date; "organization_id": string; "role": "owner" | "admin" | "operator" | "viewer"; "status": "active" | "revoked"; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string | globalThis.Date; "user_id": string; };
