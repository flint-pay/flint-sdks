[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationInputCoordinateInput

Request input. Response: [DeliveryBuyerLocationInputCoordinate](../models/DeliveryBuyerLocationInputCoordinate.md#deliverybuyerlocationinputcoordinate).

The `coordinate` variant of `DeliveryBuyerLocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | An address you supply for delivery quotes, previews, and selections. |
| `coordinate` | Required | [DeliveryCoordinateRequestInput](../models/DeliveryCoordinateRequestInput.md#deliverycoordinaterequestinput) | A latitude and longitude. |
| `type` | Required | string | Values: `"coordinate"`. |

