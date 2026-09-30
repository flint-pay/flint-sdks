
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { ReturnReplacementLineItemInput } from './ReturnReplacementLineItemInput.js';
import type { ReturnResolutionAdjustmentInput } from './ReturnResolutionAdjustmentInput.js';
import type { ReturnResolutionLineItemInput } from './ReturnResolutionLineItemInput.js';
import type { ReturnResolutionWarningInput } from './ReturnResolutionWarningInput.js';

export type ReturnResolutionPreviewInput = { "adjustments": Array<ReturnResolutionAdjustmentInput>; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "based_on_return_revision": string; "buyer_payment_amount_money": MoneyValueInput; "buyer_refund_amount_money": MoneyValueInput; /** RFC3339 timestamp. Format: date-time. */ "calculated_at": string | globalThis.Date; "corrects_return_resolution_id"?: string; "credit_money": MoneyValueInput; "deduction_money": MoneyValueInput; "line_items": Array<ReturnResolutionLineItemInput>; "replacement_line_items": Array<ReturnReplacementLineItemInput>; "replacement_total_money": MoneyValueInput; "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "correction"; "return_id": string; "returned_total_money": MoneyValueInput; "warnings": Array<ReturnResolutionWarningInput>; };
