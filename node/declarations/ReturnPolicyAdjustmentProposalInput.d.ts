
import type { MoneyValueInput } from './MoneyValueInput.js';

export type ReturnPolicyAdjustmentProposalInput = { "adjustment_type": "return_shipping_fee" | "restocking_fee" | "other_fee" | "goodwill_credit" | "price_correction" | "other"; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "based_on_quantity"?: string; "calculated_amount_money"?: MoneyValueInput; "calculation_type": "flat" | "percent"; "flat_money"?: MoneyValueInput; /** Format: double. multipleOf: 0.0001. */ "percent"?: number; "value_effect": "deduction" | "credit"; };
