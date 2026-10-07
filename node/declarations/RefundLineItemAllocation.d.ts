
import type { CategoryReference } from './CategoryReference.js';
import type { MoneyValue } from './MoneyValue.js';
import type { RefundLineItemAdjustment } from './RefundLineItemAdjustment.js';
import type { RefundLineItemAdjustmentRefund } from './RefundLineItemAdjustmentRefund.js';
import type { RefundLineItemAutomaticRefund } from './RefundLineItemAutomaticRefund.js';
import type { RefundLineItemModifierAllocation } from './RefundLineItemModifierAllocation.js';
import type { RefundTaxBreakdownRefund } from './RefundTaxBreakdownRefund.js';
import type { SelectedProductOption } from './SelectedProductOption.js';

export type RefundLineItemAllocation = { "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefund>; "adjustments"?: Array<RefundLineItemAdjustment>; "automatic_refund": RefundLineItemAutomaticRefund; "bundle_id"?: string; "categories"?: Array<CategoryReference>; "modifiers"?: Array<RefundLineItemModifierAllocation>; "order_line_item_id": string; "product_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */ "refunded_money": MoneyValue; "selected_options"?: Array<SelectedProductOption>; "sku"?: string; "source_type"?: "variant" | "bundle" | (string & {}); "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>; "tax_refund_mode": "automatic" | "explicit" | (string & {}); "variant_id"?: string; };
