
import type { ReturnEligibilityCheckLineItemInput } from './ReturnEligibilityCheckLineItemInput.js';
import type { ReturnEligibilitySelectionInput } from './ReturnEligibilitySelectionInput.js';
import type { ReturnPolicyEvaluationInput } from './ReturnPolicyEvaluationInput.js';

export type ReturnEligibilityCheckInput = { /** RFC3339 timestamp. Format: date-time. */ "evaluated_at": string | globalThis.Date; "line_items": Array<ReturnEligibilityCheckLineItemInput>; "order_id": string; "policy_evaluation": ReturnPolicyEvaluationInput; "selection": ReturnEligibilitySelectionInput; "status": "eligible" | "ineligible" | "review_required"; };
