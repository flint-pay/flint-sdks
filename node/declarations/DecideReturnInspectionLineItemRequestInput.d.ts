


export type DecideReturnInspectionLineItemRequestInput = { "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other"; "acceptance_decision_reason_message"?: string; "acceptance_status": "accepted" | "rejected" | "review_required"; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; };
