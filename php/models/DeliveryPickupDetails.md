[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupDetails

Pickup details of a delivery option: the pickup mode and the pickup location.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | [DeliveryLocationSummaryResource](../models/DeliveryLocationSummaryResource.md#deliverylocationsummaryresource) | A pickup location shown on a delivery option: its name, address, instructions, and timezone. |
| `pickup_mode` | Required | string | Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |

