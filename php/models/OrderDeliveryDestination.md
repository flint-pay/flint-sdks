[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestination

Where an order is delivered: the address, the recipient, and where the destination came from.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress). |
| `delivery_selection_id` | Optional | string | Delivery selection that controls this destination, when checkout collected it. |
| `frozen_at` | Optional | string | Time payment froze this destination. Format: `date-time`. |
| `recipient` | Optional | [OrderDeliveryDestinationRecipient](../models/OrderDeliveryDestinationRecipient.md#orderdeliverydestinationrecipient) | The name and phone number of the person receiving an order delivery. |
| `source` | Required | string | Values: `"delivery_selection"`, `"api"`, `"dashboard"`. |

### OrderDeliveryDestination.address

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress).

