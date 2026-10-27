[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionBuyerLocationCoordinate

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliverySelectionBuyerLocationCoordinateAddress](../models/DeliverySelectionBuyerLocationCoordinateAddress.md#deliveryselectionbuyerlocationcoordinateaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliverySelectionBuyerLocationCoordinate.md#deliveryselectionbuyerlocationcoordinateaddress-fields-1). |
| `coordinate` | Required | [DeliverySelectionBuyerLocationCoordinateCoordinate](../models/DeliverySelectionBuyerLocationCoordinateCoordinate.md#deliveryselectionbuyerlocationcoordinatecoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"coordinate"`. |

### DeliverySelectionBuyerLocationCoordinate.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

