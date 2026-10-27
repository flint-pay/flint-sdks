[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupDetailsInput

Pickup details of a delivery option: the pickup mode and the pickup location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryLocationSummaryResourceInput](../models/DeliveryLocationSummaryResourceInput.md#deliverylocationsummaryresourceinput) | A pickup location shown on a delivery option: its name, address, instructions, and timezone. |
| `pickup_mode` | Required | string | Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |

