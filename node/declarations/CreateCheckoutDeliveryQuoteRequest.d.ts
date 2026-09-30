
import type { CallerSuppliedDeliveryMethodResultRequest } from './CallerSuppliedDeliveryMethodResultRequest.js';
import type { DeliveryAddressRequest } from './DeliveryAddressRequest.js';
import type { DeliveryBuyerLocationRequest } from './DeliveryBuyerLocationRequest.js';
import type { DeliveryInventoryAssignmentRequest } from './DeliveryInventoryAssignmentRequest.js';

export type CreateCheckoutDeliveryQuoteRequest = { "basis_delivery_quote_id"?: string; "buyer_location"?: DeliveryBuyerLocationRequest; "destination_address"?: DeliveryAddressRequest; /** Current delivery selection ID used for compare-and-swap. Send null to assert that no selection exists. */ "expected_delivery_selection_id": string | null; "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequest>; "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequest>; "pickup_location_id"?: string; /** Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "tier_key"?: string; };
