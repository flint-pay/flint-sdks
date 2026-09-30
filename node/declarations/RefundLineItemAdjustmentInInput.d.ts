
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { RefundAdjustmentReasonInput } from './RefundAdjustmentReasonInput.js';

export type RefundLineItemAdjustmentInInput = { "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment"; "amount_money"?: MoneyValueInput; "applies_to": string; "reason"?: RefundAdjustmentReasonInput; };
