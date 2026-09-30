


export type PaymentRiskInput = { /** RFC3339 timestamp. Format: date-time. */ "evaluated_at": string | globalThis.Date; "level": "normal" | "elevated" | "highest" | "not_assessed"; "matched_risk_rule_id"?: string; "outcome"?: "authorized" | "manual_review" | "blocked" | "issuer_declined" | "invalid" | null; "outcome_reason"?: "highest_risk" | "elevated_risk" | "low_authorization_probability" | "risk_rule" | "risk_policy" | null; "review_id"?: string; /** Format: int32. */ "score"?: number; "statement": string; };
