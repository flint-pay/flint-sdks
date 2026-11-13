[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationInputAddressInput

The `address` variant of `DeliveryBuyerLocationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | The buyer location as an address. Set only when `type` is `address`. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `coordinate` | Optional | [DeliveryCoordinateRequestInput](../models/DeliveryCoordinateRequestInput.md#deliverycoordinaterequestinput) | The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and longitude. |
| `type` | Required | string | Whether the buyer location is an address or a coordinate. Values: `"address"`. |

