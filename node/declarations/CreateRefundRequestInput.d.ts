
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { RefundChargeInput } from './RefundChargeInput.js';
import type { RefundLineItemInput } from './RefundLineItemInput.js';
import type { RefundTaxBreakdownRefundInInput } from './RefundTaxBreakdownRefundInInput.js';

export type CreateRefundRequestInput = ({ "amount_money"?: MoneyValueInput; "charges"?: Array<RefundChargeInput>; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "line_items"?: Array<RefundLineItemInput>; "metadata"?: Record<string, string>; "order_id"?: string; "payment_intent_id"?: string; /** Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. */ "reason"?: "duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other"; "reason_message"?: string; "refund_method"?: "original_payment"; "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>; }) & (({ "order_id": unknown; }) | ({ "payment_intent_id": unknown; }));
