[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressAddress](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressAddress.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationaddressaddress) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationaddressaddress-fields-1). |
| `coordinate` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressCoordinate](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressCoordinate.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationaddresscoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`. |

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress.address fields 1

A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

