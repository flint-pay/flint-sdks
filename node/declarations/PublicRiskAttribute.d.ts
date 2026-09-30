


export type PublicRiskAttribute = { "available": boolean; "available_from": "pre_authorization" | "post_authorization" | (string & {}); "enum_values"?: Array<string>; "missing_value_behavior": "not_applicable_except_is_missing" | (string & {}); "name": string; "nullable": boolean; "operators": Array<string>; "unavailable_reason"?: "risk_scoring_not_enabled" | "ip_geolocation_not_enabled" | (string & {}); "value_type": "money" | "currency" | "string" | "enum" | "country" | "email" | "ip_address" | "boolean" | "integer" | (string & {}); };
