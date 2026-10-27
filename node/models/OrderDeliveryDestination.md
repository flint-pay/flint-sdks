[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestination

Where an order is delivered: the address, the recipient, and where the destination came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [OrderDeliveryDestinationAddress](../models/OrderDeliveryDestinationAddress.md#orderdeliverydestinationaddress) | The delivery address on an order. |
| `delivery_selection_id` | Optional | string | Delivery selection that controls this destination, when checkout collected it. |
| `frozen_at` | Optional | string | Time payment froze this destination. Format: `date-time`. |
| `recipient` | Optional | [OrderDeliveryDestinationRecipient](../models/OrderDeliveryDestinationRecipient.md#orderdeliverydestinationrecipient) | The name and phone number of the person receiving an order delivery. |
| `source` | Required | string | Values: `"delivery_selection"`, `"api"`, `"dashboard"`. |

