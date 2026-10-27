[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationInput

The delivery address for a subscription's future shipments, with the saved customer address it came from.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressInput](../models/AddressInput.md#addressinput) or null | Resolved delivery address used by future shipments. |
| `customer_address_id` | Optional | string | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. |

