


export type Organization = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "metadata"?: Record<string, string>; "name": string; "organization_id": string; "parent_organization"?: (({ /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "name": string; "organization_id": string; "parent_organization_id"?: string; "status": "active" | "deleted" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; }) | (null)); "parent_organization_id"?: string; "status": "active" | "deleted" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
