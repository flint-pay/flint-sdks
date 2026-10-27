[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteBuyerLocationCoordinate

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryQuoteBuyerLocationCoordinateAddress](../models/DeliveryQuoteBuyerLocationCoordinateAddress.md#deliveryquotebuyerlocationcoordinateaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryQuoteBuyerLocationCoordinate.md#deliveryquotebuyerlocationcoordinateaddress-fields-1). |
| `coordinate` | Required | [DeliveryQuoteBuyerLocationCoordinateCoordinate](../models/DeliveryQuoteBuyerLocationCoordinateCoordinate.md#deliveryquotebuyerlocationcoordinatecoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"coordinate"`. |

### DeliveryQuoteBuyerLocationCoordinate.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

