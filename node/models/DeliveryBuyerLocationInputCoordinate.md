[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationInputCoordinate

The `coordinate` variant of `DeliveryBuyerLocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `coordinate` | Required | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | A latitude and longitude. `coordinate`: [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddresscoordinate). |
| `type` | Required | string | Values: `"coordinate"`. |

### DeliveryBuyerLocationInputCoordinate.coordinate

Field definitions: [DeliveryBuyerLocationInputAddress.coordinate](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddresscoordinate).

