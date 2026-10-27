[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityLocationResourceInput

One pickup location in a pickup locations preview, with its outcome, distance, compatible methods, and applicable quantities.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applicable_quantities` | Required | Array of [DeliveryPickupAvailabilityQuantityResourceInput](../models/DeliveryPickupAvailabilityQuantityResourceInput.md#deliverypickupavailabilityquantityresourceinput) |  |
| `candidate_outcome` | Required | [DeliveryPickupAvailabilityCandidateOutcomeInput](../models/DeliveryPickupAvailabilityCandidateOutcomeInput.md#deliverypickupavailabilitycandidateoutcomeinput) | Whether pickup is available at one location, chosen by `type`, with the reason when it is unavailable or cannot be calculated. |
| `compatible_methods` | Required | Array of [DeliveryPickupAvailabilityMethodResourceInput](../models/DeliveryPickupAvailabilityMethodResourceInput.md#deliverypickupavailabilitymethodresourceinput) |  |
| `distance_meters` | Optional | number | Straight-line distance in meters from the buyer location. A buyer location with only a postal code is measured from the postal code's center. Omitted when Flint cannot place the buyer location or the store. |
| `location` | Required | [DeliveryPickupAvailabilityLocationSummaryInput](../models/DeliveryPickupAvailabilityLocationSummaryInput.md#deliverypickupavailabilitylocationsummaryinput) | The ID, name, and address of a pickup location in a pickup locations preview. |

