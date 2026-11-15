[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationInputAddress

The `address` variant of `DeliveryBuyerLocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | The buyer location as an address. Set only when `type` is `address`. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `coordinate` | Optional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and longitude. `coordinate`: [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddresscoordinate). |
| `type` | Required | string | Whether the buyer location is an address or a coordinate. Values: `"address"`. |

### DeliveryBuyerLocationInputAddress.coordinate

The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and longitude.

Field definitions: [shared fields](DeliveryCoordinateRequestInput.md#deliverycoordinaterequestinput).

