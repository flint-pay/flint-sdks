


export type DecideReturnInspectionLineItemRequest = { "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other" | (string & {}); "acceptance_decision_reason_message"?: string; "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {}); /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; };
