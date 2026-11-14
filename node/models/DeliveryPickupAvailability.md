[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailability

The result of a pickup locations preview: each pickup location and whether it can supply the order, with input requirements and merchant diagnostics.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | Time Flint evaluated pickup availability. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `evaluation_status` | Required | string | How completely Flint evaluated the pickup Locations. Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the pickup methods need before Flint can evaluate them. |
| `locations` | Required | Array of [DeliveryPickupAvailabilityLocationResource](../models/DeliveryPickupAvailabilityLocationResource.md#deliverypickupavailabilitylocationresource) | Up to 25 pickup locations, nearest first when Flint can place the buyer location, otherwise in the order the pickup methods list them. maxItems: `25`. |
| `merchant_diagnostics` | Optional | Array of [DeliveryPickupAvailabilityDiagnostic](../models/DeliveryPickupAvailabilityDiagnostic.md#deliverypickupavailabilitydiagnostic) | Configured Locations the search left out, and listed Locations that cannot supply the order's tracked items. Always present with an API key or dashboard credential as an array, including when empty. |
| `mode` | Required | string | The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`. |

