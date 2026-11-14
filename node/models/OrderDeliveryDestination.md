[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestination

Where an order is delivered: the address, the recipient, and where the destination came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) | Address the order's items are delivered to. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `delivery_selection_id` | Optional | string | Delivery selection that controls this destination, when checkout collected it. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `frozen_at` | Optional | string | Time payment froze this destination. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `recipient` | Optional | [OrderDeliveryDestinationRecipient](../models/OrderDeliveryDestinationRecipient.md#orderdeliverydestinationrecipient) | Who receives the order. Omitted when no recipient was saved. The name and phone number of the person receiving an order delivery. |
| `source` | Required | string | Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`. |

