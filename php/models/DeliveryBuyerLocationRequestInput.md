[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationRequestInput

The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | An address you supply for delivery quotes, previews, and selections. |
| `coordinate` | Conditional | [DeliveryCoordinateRequestInput](../models/DeliveryCoordinateRequestInput.md#deliverycoordinaterequestinput) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`, `"coordinate"`. |

### DeliveryBuyerLocationRequestInput variant 1: `type` = `"address"`

oneOf variant 1: The `address` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryBuyerLocationRequestInput variant 2: `type` = `"coordinate"`

oneOf variant 2: The `coordinate` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

