
import type { MoneyValue } from './MoneyValue.js';

export type ReturnPolicyAdjustmentProposal = { "adjustment_type": "return_shipping_fee" | "restocking_fee" | "other_fee" | "goodwill_credit" | "price_correction" | "other" | (string & {}); /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "based_on_quantity"?: string; "calculated_amount_money"?: MoneyValue; "calculation_type": "flat" | "percent" | (string & {}); "flat_money"?: MoneyValue; /** Format: double. multipleOf: 0.0001. */ "percent"?: number; "value_effect": "deduction" | "credit" | (string & {}); };
