


export type OrganizationMembership = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "organization_id": string; "role": "owner" | "admin" | "operator" | "viewer" | (string & {}); "status": "active" | "revoked" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; "user_id": string; };
