[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSummaryResourceInput

A pickup location shown on a delivery option: its name, address, instructions, and timezone.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressResourceInput](../models/DeliveryAddressResourceInput.md#deliveryaddressresourceinput) | An address as returned on delivery quotes, selections, previews, and pickup locations. |
| `instructions` | Optional | string |  |
| `location_id` | Required | string |  |
| `name` | Required | string |  |
| `timezone` | Optional | string |  |

