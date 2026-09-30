
import type { CallerSuppliedDeliveryMethodResultRequestInput } from './CallerSuppliedDeliveryMethodResultRequestInput.js';
import type { DeliveryAddressRequestInput } from './DeliveryAddressRequestInput.js';
import type { DeliveryBuyerLocationRequestInput } from './DeliveryBuyerLocationRequestInput.js';
import type { DeliveryInventoryAssignmentRequestInput } from './DeliveryInventoryAssignmentRequestInput.js';

export type CreateCheckoutDeliveryQuoteRequestInput = { "basis_delivery_quote_id"?: string; "buyer_location"?: DeliveryBuyerLocationRequestInput; "destination_address"?: DeliveryAddressRequestInput; /** Current delivery selection ID used for compare-and-swap. Send null to assert that no selection exists. */ "expected_delivery_selection_id": string | null; "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequestInput>; "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequestInput>; "pickup_location_id"?: string; /** Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "tier_key"?: string; };
