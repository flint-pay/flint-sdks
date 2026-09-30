
import type { MoneyValue } from './MoneyValue.js';
import type { RefundAdjustmentAudit } from './RefundAdjustmentAudit.js';
import type { RefundAdjustmentReason } from './RefundAdjustmentReason.js';
import type { RefundLineItemAdjustmentIn } from './RefundLineItemAdjustmentIn.js';
import type { RefundLineItemAdjustmentRefundIn } from './RefundLineItemAdjustmentRefundIn.js';
import type { RefundTaxBreakdownRefundIn } from './RefundTaxBreakdownRefundIn.js';

export type RefundLineItem = { "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundIn>; "amount_money"?: MoneyValue; "order_line_item_id": string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity"?: string; "refund_adjustments"?: Array<RefundLineItemAdjustmentIn>; "tax_adjustment_audit"?: RefundAdjustmentAudit; "tax_adjustment_reason"?: RefundAdjustmentReason; "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>; "tax_money"?: MoneyValue; "tax_refund_mode"?: "automatic" | "explicit" | (string & {}); };
