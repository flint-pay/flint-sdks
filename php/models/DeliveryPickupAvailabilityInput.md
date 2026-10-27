[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityInput

The result of a pickup locations preview: each pickup location and whether it can supply the order, with input requirements and merchant diagnostics.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirementInput](../models/DeliveryInputRequirementInput.md#deliveryinputrequirementinput) |  |
| `locations` | Required | Array of [DeliveryPickupAvailabilityLocationResourceInput](../models/DeliveryPickupAvailabilityLocationResourceInput.md#deliverypickupavailabilitylocationresourceinput) | Up to 25 pickup locations, nearest first when Flint can place the buyer location, otherwise in the order the pickup methods list them. maxItems: `25`. |
| `merchant_diagnostics` | Optional | Array of [DeliveryPickupAvailabilityDiagnosticInput](../models/DeliveryPickupAvailabilityDiagnosticInput.md#deliverypickupavailabilitydiagnosticinput) | Configured Locations the search left out, and listed Locations that cannot supply the order's tracked items. Always present with an API key or dashboard credential as an array, including when empty. |
| `mode` | Required | string | The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`. |

