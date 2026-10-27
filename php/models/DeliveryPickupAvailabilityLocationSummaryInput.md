[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityLocationSummaryInput

The ID, name, and address of a pickup location in a pickup locations preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressResourceInput](../models/DeliveryAddressResourceInput.md#deliveryaddressresourceinput) | An address as returned on delivery quotes, selections, previews, and pickup locations. |
| `location_id` | Required | string |  |
| `name` | Required | string |  |

