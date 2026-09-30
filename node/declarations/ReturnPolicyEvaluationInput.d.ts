
import type { ReturnPolicyEvaluationLineItemInput } from './ReturnPolicyEvaluationLineItemInput.js';

export type ReturnPolicyEvaluationInput = { /** RFC3339 timestamp. Format: date-time. */ "evaluated_at"?: string | globalThis.Date; /** RFC3339 timestamp. Format: date-time. */ "expires_at"?: string | globalThis.Date; "line_items": Array<ReturnPolicyEvaluationLineItemInput>; "reason": "eligible_under_policy" | "manual_review_required" | "return_window_expired" | "quantity_unavailable" | "policy_ineligible" | "resolution_not_allowed" | "reason_not_allowed" | "policy_conflict" | "no_matching_policy"; "reason_message": string; "return_policy_id"?: string; "return_policy_revision_id"?: string; "status": "eligible" | "ineligible" | "review_required"; };
