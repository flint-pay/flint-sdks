
import type { CreateOrderLineItemInput } from './CreateOrderLineItemInput.js';
import type { DeliveryAddressRequestInput } from './DeliveryAddressRequestInput.js';
import type { DeliveryBuyerLocationRequestInput } from './DeliveryBuyerLocationRequestInput.js';
import type { DeliveryPreviewRoutingSourceInput } from './DeliveryPreviewRoutingSourceInput.js';

export type CreateDeliveryPreviewRequestInput = { "buyer_location"?: DeliveryBuyerLocationRequestInput; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "delivery_method_ids": Array<string>; "destination_address"?: DeliveryAddressRequestInput; "inventory_routing_source"?: DeliveryPreviewRoutingSourceInput; /** minItems: 1. maxItems: 100. */ "line_items": Array<CreateOrderLineItemInput>; "pickup_location_id"?: string; "pricing_context"?: Record<string, string>; };
