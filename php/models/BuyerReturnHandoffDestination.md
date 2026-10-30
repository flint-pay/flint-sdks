[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnHandoffDestination

The destination name, address, and type shown to the buyer for returning merchandise.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress). |
| `destination_type` | Required | string | Values: `"buyer_address"`, `"location"`, `"external_location"`. |
| `name` | Optional | string |  |

### BuyerReturnHandoffDestination.address

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress).

