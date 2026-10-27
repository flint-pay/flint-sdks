[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionBuyerLocationAddress

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliverySelectionBuyerLocationAddressAddress](../models/DeliverySelectionBuyerLocationAddressAddress.md#deliveryselectionbuyerlocationaddressaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliverySelectionBuyerLocationAddress.md#deliveryselectionbuyerlocationaddressaddress-fields-1). |
| `coordinate` | Optional | [DeliverySelectionBuyerLocationAddressCoordinate](../models/DeliverySelectionBuyerLocationAddressCoordinate.md#deliveryselectionbuyerlocationaddresscoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`. |

### DeliverySelectionBuyerLocationAddress.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

