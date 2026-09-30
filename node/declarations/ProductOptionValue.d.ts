


export type ProductOptionValue = { /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "metadata"?: Record<string, string>; "option_value_id": string; /** Format: int32. */ "position": number; "status"?: "active" | "inactive" | "archived" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; "value": string; };
