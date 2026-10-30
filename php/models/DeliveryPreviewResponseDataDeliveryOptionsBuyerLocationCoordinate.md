[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsBuyerLocationCoordinate

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsBuyerLocationCoordinateAddress](../models/DeliveryPreviewResponseDataDeliveryOptionsBuyerLocationCoordinateAddress.md#deliverypreviewresponsedatadeliveryoptionsbuyerlocationcoordinateaddress) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryPreviewResponseDataDeliveryOptionsBuyerLocationCoordinate.md#deliverypreviewresponsedatadeliveryoptionsbuyerlocationcoordinateaddress-fields-1). |
| `coordinate` | Required | [DeliveryPreviewResponseDataDeliveryOptionsBuyerLocationCoordinateCoordinate](../models/DeliveryPreviewResponseDataDeliveryOptionsBuyerLocationCoordinateCoordinate.md#deliverypreviewresponsedatadeliveryoptionsbuyerlocationcoordinatecoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"coordinate"`. |

### DeliveryPreviewResponseDataDeliveryOptionsBuyerLocationCoordinate.address fields 1

A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

