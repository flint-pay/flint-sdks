[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationInputAddressInput

Request input. Response: [DeliveryBuyerLocationInputAddress](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress).

The `address` variant of `DeliveryBuyerLocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | An address you supply for delivery quotes, previews, and selections. |
| `coordinate` | Optional | [DeliveryCoordinateRequestInput](../models/DeliveryCoordinateRequestInput.md#deliverycoordinaterequestinput) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`. |

