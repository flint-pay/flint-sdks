
import type { CreateOrderLineItem } from './CreateOrderLineItem.js';
import type { DeliveryAddressRequest } from './DeliveryAddressRequest.js';
import type { DeliveryBuyerLocationRequest } from './DeliveryBuyerLocationRequest.js';
import type { DeliveryPreviewRoutingSource } from './DeliveryPreviewRoutingSource.js';

export type CreateDeliveryOptionsPreviewRequest = { "buyer_location"?: DeliveryBuyerLocationRequest; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "delivery_method_ids": Array<string>; "destination_address"?: DeliveryAddressRequest; "inventory_routing_source"?: DeliveryPreviewRoutingSource; /** minItems: 1. maxItems: 100. */ "line_items": Array<CreateOrderLineItem>; /** The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. */ "mode": "delivery_options" | (string & {}); "pickup_location_id"?: string; "pricing_context"?: Record<string, string>; };
