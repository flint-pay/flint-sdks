[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationInputAddress

The `address` variant of `DeliveryBuyerLocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `coordinate` | Optional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | A latitude and longitude. `coordinate`: [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddresscoordinate). |
| `type` | Required | string | Values: `"address"`. |

### DeliveryBuyerLocationInputAddress.coordinate

A latitude and longitude.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `latitude` | Required | number | minimum: `-90`. maximum: `90`. |
| `longitude` | Required | number | minimum: `-180`. maximum: `180`. |

