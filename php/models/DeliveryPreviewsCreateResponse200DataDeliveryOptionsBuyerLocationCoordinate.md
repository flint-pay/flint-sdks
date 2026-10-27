[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinate

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinateAddress](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinateAddress.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationcoordinateaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinate.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationcoordinateaddress-fields-1). |
| `coordinate` | Required | [DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinateCoordinate](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinateCoordinate.md#deliverypreviewscreateresponse200datadeliveryoptionsbuyerlocationcoordinatecoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"coordinate"`. |

### DeliveryPreviewsCreateResponse200DataDeliveryOptionsBuyerLocationCoordinate.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

