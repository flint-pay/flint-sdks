
import type { MoneyValue } from './MoneyValue.js';
import type { ReturnReplacementLineItem } from './ReturnReplacementLineItem.js';
import type { ReturnResolutionAdjustment } from './ReturnResolutionAdjustment.js';
import type { ReturnResolutionLineItem } from './ReturnResolutionLineItem.js';
import type { ReturnResolutionWarning } from './ReturnResolutionWarning.js';

export type ReturnResolutionPreview = { "adjustments": Array<ReturnResolutionAdjustment>; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "based_on_return_revision": string; "buyer_payment_amount_money": MoneyValue; "buyer_refund_amount_money": MoneyValue; /** RFC3339 timestamp. Format: date-time. */ "calculated_at": string; "corrects_return_resolution_id"?: string; "credit_money": MoneyValue; "deduction_money": MoneyValue; "line_items": Array<ReturnResolutionLineItem>; "replacement_line_items": Array<ReturnReplacementLineItem>; "replacement_total_money": MoneyValue; "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "correction" | (string & {}); "return_id": string; "returned_total_money": MoneyValue; "warnings": Array<ReturnResolutionWarning>; };
