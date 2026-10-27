[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityLocationResource

One pickup location in a pickup locations preview, with its outcome, distance, compatible methods, and applicable quantities.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applicable_quantities` | Required | Array of [DeliveryQuoteLineItemResource](../models/DeliveryQuoteLineItemResource.md#deliveryquotelineitemresource) |  |
| `candidate_outcome` | Required | [DeliveryPickupAvailabilityCandidateOutcome](../models/DeliveryPickupAvailabilityCandidateOutcome.md#deliverypickupavailabilitycandidateoutcome) | Whether pickup is available at one location, chosen by `type`, with the reason when it is unavailable or cannot be calculated. |
| `compatible_methods` | Required | Array of [DeliveryPickupAvailabilityMethodResource](../models/DeliveryPickupAvailabilityMethodResource.md#deliverypickupavailabilitymethodresource) |  |
| `distance_meters` | Optional | number | Straight-line distance in meters from the buyer location. A buyer location with only a postal code is measured from the postal code's center. Omitted when Flint cannot place the buyer location or the store. |
| `location` | Required | [DeliveryPickupAvailabilityLocationSummary](../models/DeliveryPickupAvailabilityLocationSummary.md#deliverypickupavailabilitylocationsummary) | The ID, name, and address of a pickup location in a pickup locations preview. |

