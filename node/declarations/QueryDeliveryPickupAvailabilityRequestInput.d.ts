
import type { DeliveryBuyerLocationRequestInput } from './DeliveryBuyerLocationRequestInput.js';
import type { DeliveryPickupAvailabilityMaximumDistanceRequestInput } from './DeliveryPickupAvailabilityMaximumDistanceRequestInput.js';

export type QueryDeliveryPickupAvailabilityRequestInput = { "buyer_location"?: DeliveryBuyerLocationRequestInput; /** ID of the checkout's current delivery selection, as GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current returns it, or null when there is none. Any other value returns 409 DELIVERY_PICKUP_AVAILABILITY_CHANGED. The search does not change or release the selection. */ "expected_delivery_selection_id"?: string; "maximum_distance"?: DeliveryPickupAvailabilityMaximumDistanceRequestInput; };
