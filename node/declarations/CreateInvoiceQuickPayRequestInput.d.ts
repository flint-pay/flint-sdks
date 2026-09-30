
import type { CreateOrderDiscountInput } from './CreateOrderDiscountInput.js';
import type { CreateOrderLineItemInput } from './CreateOrderLineItemInput.js';
import type { CreateOrderTipInput } from './CreateOrderTipInput.js';

export type CreateInvoiceQuickPayRequestInput = { "buyer_note"?: string; "customer_id"?: string; "discounts"?: Array<CreateOrderDiscountInput>; "internal_note"?: string; /** minItems: 1. */ "line_items": Array<CreateOrderLineItemInput>; "requested_tip"?: CreateOrderTipInput; };
