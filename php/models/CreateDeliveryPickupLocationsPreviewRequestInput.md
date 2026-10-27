[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryPickupLocationsPreviewRequestInput

The `pickup_locations` variant of `CreateDeliveryPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `checkout_session_id` | Required | string | Checkout session whose pickup locations to evaluate. Checkout credentials must identify their own session. minLength: `1`. |
| `expected_delivery_selection_id` | Optional | string or null | ID of the checkout's current delivery selection, as GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current returns it, or null when there is none. Any other value returns 409 DELIVERY_PICKUP_AVAILABILITY_CHANGED. The search does not change or release the selection. minLength: `1`. |
| `maximum_distance` | Optional | [DeliveryPickupAvailabilityMaximumDistanceRequestInput](../models/DeliveryPickupAvailabilityMaximumDistanceRequestInput.md#deliverypickupavailabilitymaximumdistancerequestinput) | A maximum distance from the buyer location, as a value and unit, that limits which pickup locations a preview returns. |
| `mode` | Required | string | The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`. |

