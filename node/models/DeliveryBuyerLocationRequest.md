[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationRequest

The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `coordinate` | Conditional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | A latitude and longitude. `coordinate`: [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddresscoordinate). |
| `type` | Required | string | Values: `"address"`, `"coordinate"`. |

### DeliveryBuyerLocationRequest variant 1: `type` = `"address"`

oneOf variant 1: The `address` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryBuyerLocationRequest variant 2: `type` = `"coordinate"`

oneOf variant 2: The `coordinate` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliveryBuyerLocationRequest.coordinate

Field definitions: [DeliveryBuyerLocationInputAddress.coordinate](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddresscoordinate).

