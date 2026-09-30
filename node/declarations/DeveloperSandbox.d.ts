


export type DeveloperSandbox = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "is_default": boolean; "name": string; "sandbox_id": string; "status": "active" | "archived" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; };
