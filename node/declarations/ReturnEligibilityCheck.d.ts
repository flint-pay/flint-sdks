
import type { ReturnEligibilityCheckLineItem } from './ReturnEligibilityCheckLineItem.js';
import type { ReturnEligibilitySelection } from './ReturnEligibilitySelection.js';
import type { ReturnPolicyEvaluation } from './ReturnPolicyEvaluation.js';

export type ReturnEligibilityCheck = { /** RFC3339 timestamp. Format: date-time. */ "evaluated_at": string; "line_items": Array<ReturnEligibilityCheckLineItem>; "order_id": string; "policy_evaluation": ReturnPolicyEvaluation; "selection": ReturnEligibilitySelection; "status": "eligible" | "ineligible" | "review_required" | (string & {}); };
