
import type { CreateOrderDiscount } from './CreateOrderDiscount.js';
import type { CreateOrderLineItem } from './CreateOrderLineItem.js';
import type { CreateOrderTip } from './CreateOrderTip.js';
import type { OrderDeliveryDestinationRequest } from './OrderDeliveryDestinationRequest.js';
import type { OrderInventoryRoutingSourceRequest } from './OrderInventoryRoutingSourceRequest.js';
import type { OrderTaxRequest } from './OrderTaxRequest.js';

export type CreateOrderRequest = { "buyer_note"?: string; "customer_id"?: string; /** Shipment or local-delivery destination for an order created without a delivery selection. */ "delivery_destination"?: OrderDeliveryDestinationRequest; "discounts"?: Array<CreateOrderDiscount>; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "internal_note"?: string; "inventory_routing_source"?: OrderInventoryRoutingSourceRequest; /** minItems: 1. */ "line_items": Array<CreateOrderLineItem>; "metadata"?: Record<string, string>; /** Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit. */ "requested_tip"?: CreateOrderTip; "tax"?: OrderTaxRequest; };
