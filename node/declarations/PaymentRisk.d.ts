


export type PaymentRisk = { /** RFC3339 timestamp. Format: date-time. */ "evaluated_at": string; "level": "normal" | "elevated" | "highest" | "not_assessed" | (string & {}); "matched_risk_rule_id"?: string; "outcome"?: "authorized" | "manual_review" | "blocked" | "issuer_declined" | "invalid" | null | (string & {}) | null; "outcome_reason"?: "highest_risk" | "elevated_risk" | "low_authorization_probability" | "risk_rule" | "risk_policy" | null | (string & {}) | null; "review_id"?: string; /** Format: int32. */ "score"?: number; "statement": string; };
