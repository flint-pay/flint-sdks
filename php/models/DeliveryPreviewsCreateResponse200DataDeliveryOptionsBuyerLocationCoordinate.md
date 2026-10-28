[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinate

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinateAddress](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinateAddress.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationcoordinateaddress) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinate.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationcoordinateaddress-fields-1). |
| `coordinate` | Required | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinateCoordinate](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinateCoordinate.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationcoordinatecoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"coordinate"`. |

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinate.address fields 1

A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

