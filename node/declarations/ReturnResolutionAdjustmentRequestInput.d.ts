
import type { MoneyValueInput } from './MoneyValueInput.js';

export type ReturnResolutionAdjustmentRequestInput = { "adjustment_type": "return_shipping_fee" | "restocking_fee" | "other_fee" | "goodwill_credit" | "price_correction" | "other"; "applied_amount_money": MoneyValueInput; "assessed_amount_money": MoneyValueInput; "reason": "return_policy" | "inspection_result" | "return_shipping_cost" | "customer_service" | "manual_correction" | "other"; "reason_message"?: string; "return_line_item_id"?: string; "status"?: "applied" | "waived"; "value_effect": "deduction" | "credit"; "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other"; "waiver_reason_message"?: string; };
