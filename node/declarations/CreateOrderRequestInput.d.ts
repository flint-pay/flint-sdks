
import type { CreateOrderDiscountInput } from './CreateOrderDiscountInput.js';
import type { CreateOrderLineItemInput } from './CreateOrderLineItemInput.js';
import type { CreateOrderTipInput } from './CreateOrderTipInput.js';
import type { OrderDeliveryDestinationRequestInput } from './OrderDeliveryDestinationRequestInput.js';
import type { OrderInventoryRoutingSourceRequestInput } from './OrderInventoryRoutingSourceRequestInput.js';
import type { OrderTaxRequestInput } from './OrderTaxRequestInput.js';

export type CreateOrderRequestInput = { "buyer_note"?: string; "customer_id"?: string; /** Shipment or local-delivery destination for an order created without a delivery selection. */ "delivery_destination"?: OrderDeliveryDestinationRequestInput; "discounts"?: Array<CreateOrderDiscountInput>; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "internal_note"?: string; "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput; /** minItems: 1. */ "line_items": Array<CreateOrderLineItemInput>; "metadata"?: Record<string, string>; /** Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit. */ "requested_tip"?: CreateOrderTipInput; "tax"?: OrderTaxRequestInput; };
