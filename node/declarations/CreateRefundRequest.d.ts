
import type { MoneyValue } from './MoneyValue.js';
import type { RefundCharge } from './RefundCharge.js';
import type { RefundLineItem } from './RefundLineItem.js';
import type { RefundTaxBreakdownRefundIn } from './RefundTaxBreakdownRefundIn.js';

export type CreateRefundRequest = ({ "amount_money"?: MoneyValue; "charges"?: Array<RefundCharge>; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "line_items"?: Array<RefundLineItem>; "metadata"?: Record<string, string>; "order_id"?: string; "payment_intent_id"?: string; /** Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. */ "reason"?: "duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other" | (string & {}); "reason_message"?: string; "refund_method"?: "original_payment" | (string & {}); "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>; }) & (({ "order_id": unknown; }) | ({ "payment_intent_id": unknown; }) | (object));
