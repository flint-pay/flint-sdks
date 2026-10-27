[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteBuyerLocationAddress

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliveryQuoteBuyerLocationAddressAddress](../models/DeliveryQuoteBuyerLocationAddressAddress.md#deliveryquotebuyerlocationaddressaddress) | An address as returned on delivery quotes, selections, previews, and pickup locations. `address`: [field definitions](../models/DeliveryQuoteBuyerLocationAddress.md#deliveryquotebuyerlocationaddressaddress-fields-1). |
| `coordinate` | Optional | [DeliveryQuoteBuyerLocationAddressCoordinate](../models/DeliveryQuoteBuyerLocationAddressCoordinate.md#deliveryquotebuyerlocationaddresscoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`. |

### DeliveryQuoteBuyerLocationAddress.address fields 1

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressResourceInput.md#deliveryaddressresourceinput).

