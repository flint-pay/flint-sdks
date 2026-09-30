


export type RiskList = { "alias": string; /** RFC3339 timestamp. Format: date-time. */ "archived_at": string | null; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "created_by": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "item_count": string; "item_type": "card_fingerprint" | "card_bin" | "email" | "email_domain" | "ip_address" | "country" | "customer_id" | "string" | "case_sensitive_string" | (string & {}); "name": string; "risk_list_id": string; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; };
