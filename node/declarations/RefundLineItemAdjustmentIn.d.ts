
import type { MoneyValue } from './MoneyValue.js';
import type { RefundAdjustmentReason } from './RefundAdjustmentReason.js';

export type RefundLineItemAdjustmentIn = { "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {}); "amount_money"?: MoneyValue; "applies_to": string; "reason"?: RefundAdjustmentReason; };
