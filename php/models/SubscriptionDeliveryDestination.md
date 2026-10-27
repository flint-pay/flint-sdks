[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestination

The delivery address for a subscription's future shipments, with the saved customer address it came from.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) or null | Resolved delivery address used by future shipments. |
| `customer_address_id` | Optional | string | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. |

