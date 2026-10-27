[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationResourceCoordinateInput

The normalized buyer address or coordinate used for this quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressResourceInput](../models/DeliveryAddressResourceInput.md#deliveryaddressresourceinput) | An address as returned on delivery quotes, selections, previews, and pickup locations. |
| `coordinate` | Required | [DeliveryCoordinateRequestInput](../models/DeliveryCoordinateRequestInput.md#deliverycoordinaterequestinput) | A latitude and longitude. |
| `type` | Required | string | Values: `"coordinate"`. |

