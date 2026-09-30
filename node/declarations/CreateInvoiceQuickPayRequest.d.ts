
import type { CreateOrderDiscount } from './CreateOrderDiscount.js';
import type { CreateOrderLineItem } from './CreateOrderLineItem.js';
import type { CreateOrderTip } from './CreateOrderTip.js';

export type CreateInvoiceQuickPayRequest = { "buyer_note"?: string; "customer_id"?: string; "discounts"?: Array<CreateOrderDiscount>; "internal_note"?: string; /** minItems: 1. */ "line_items": Array<CreateOrderLineItem>; "requested_tip"?: CreateOrderTip; };
