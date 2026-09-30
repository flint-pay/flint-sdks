
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { RefundAdjustmentAuditInput } from './RefundAdjustmentAuditInput.js';
import type { RefundAdjustmentReasonInput } from './RefundAdjustmentReasonInput.js';
import type { RefundLineItemAdjustmentInInput } from './RefundLineItemAdjustmentInInput.js';
import type { RefundLineItemAdjustmentRefundInInput } from './RefundLineItemAdjustmentRefundInInput.js';
import type { RefundTaxBreakdownRefundInInput } from './RefundTaxBreakdownRefundInInput.js';

export type RefundLineItemInput = { "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundInInput>; "amount_money"?: MoneyValueInput; "order_line_item_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity"?: string; "refund_adjustments"?: Array<RefundLineItemAdjustmentInInput>; "tax_adjustment_audit"?: RefundAdjustmentAuditInput; "tax_adjustment_reason"?: RefundAdjustmentReasonInput; "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>; "tax_money"?: MoneyValueInput; "tax_refund_mode"?: "automatic" | "explicit"; };
