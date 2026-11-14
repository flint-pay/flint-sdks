[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationInput

The delivery address for a subscription's future shipments, with the saved customer address it came from.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressInput](../models/AddressInput.md#addressinput) or null | Resolved delivery address used by future shipments. `null` when the saved destination has no address. |
| `customer_address_id` | Optional | string | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `customer_id` | Required | string or null | Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |

