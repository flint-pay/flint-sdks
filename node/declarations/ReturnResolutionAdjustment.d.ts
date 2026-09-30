
import type { MoneyValue } from './MoneyValue.js';
import type { ReturnActor } from './ReturnActor.js';

export type ReturnResolutionAdjustment = { "adjustment_type": "return_shipping_fee" | "restocking_fee" | "other_fee" | "goodwill_credit" | "price_correction" | "other" | (string & {}); "applied_amount_money": MoneyValue; "assessed_amount_money": MoneyValue; "reason": "return_policy" | "inspection_result" | "return_shipping_cost" | "customer_service" | "manual_correction" | "other" | (string & {}); "reason_message"?: string; "return_line_item_id"?: string; "return_policy_revision_id"?: string; "status": "applied" | "waived" | (string & {}); "value_effect": "deduction" | "credit" | (string & {}); /** RFC3339 timestamp. Format: date-time. */ "waived_at"?: string; "waived_by"?: ReturnActor; "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {}); "waiver_reason_message"?: string; };
