[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryPickupLocationsPreviewRequest

The `pickup_locations` variant of `CreateDeliveryPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequest](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | Buyer location to measure pickup distance from. Locations are ordered nearest first when it is set. The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `checkout_session_id` | Required | string | Checkout session whose pickup locations to evaluate. Checkout credentials must identify their own session. minLength: `1`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `maximum_distance` | Optional | [DeliveryDistance](../models/DeliveryDistance.md#deliverydistance) | Farthest a pickup Location can be from the buyer location. Omit it to apply no limit. A maximum distance from the buyer location, as a value and unit, that limits which pickup locations a preview returns. `maximum_distance`: [field definitions](../models/CreateDeliveryPickupLocationsPreviewRequest.md#createdeliverypickuplocationspreviewrequestmaximum_distance). |
| `mode` | Required | string | The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`. |

### CreateDeliveryPickupLocationsPreviewRequest.maximum_distance

Farthest a pickup Location can be from the buyer location. Omit it to apply no limit. A maximum distance from the buyer location, as a value and unit, that limits which pickup locations a preview returns.

Field definitions: [shared fields](DeliveryPickupAvailabilityMaximumDistanceRequestInput.md#deliverypickupavailabilitymaximumdistancerequestinput).

