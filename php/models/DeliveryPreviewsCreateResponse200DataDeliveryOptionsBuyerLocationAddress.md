[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressAddress](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressAddress.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationaddressaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationaddressaddress-fields-1). |
| `coordinate` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressCoordinate](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddressCoordinate.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationaddresscoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`. |

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationAddress.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

