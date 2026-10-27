[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationResourceAddressInput

The normalized buyer address or coordinate used for this quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliveryAddressResourceInput](../models/DeliveryAddressResourceInput.md#deliveryaddressresourceinput) | An address as returned on delivery quotes, selections, previews, and pickup locations. |
| `coordinate` | Optional | [DeliveryCoordinateRequestInput](../models/DeliveryCoordinateRequestInput.md#deliverycoordinaterequestinput) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`. |

