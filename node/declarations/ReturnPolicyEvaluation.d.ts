
import type { ReturnPolicyEvaluationLineItem } from './ReturnPolicyEvaluationLineItem.js';

export type ReturnPolicyEvaluation = { /** RFC3339 timestamp. Format: date-time. */ "evaluated_at"?: string; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string; "line_items": Array<ReturnPolicyEvaluationLineItem>; "reason": "eligible_under_policy" | "manual_review_required" | "return_window_expired" | "quantity_unavailable" | "policy_ineligible" | "resolution_not_allowed" | "reason_not_allowed" | "policy_conflict" | "no_matching_policy" | (string & {}); "reason_message": string; "return_policy_id"?: string; "return_policy_revision_id"?: string; "status": "eligible" | "ineligible" | "review_required" | (string & {}); };
