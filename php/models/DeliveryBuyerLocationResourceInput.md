[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationResourceInput

The normalized buyer address or coordinate used for this quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [DeliveryAddressResourceInput](../models/DeliveryAddressResourceInput.md#deliveryaddressresourceinput) | An address as returned on delivery quotes, selections, previews, and pickup locations. |
| `coordinate` | Conditional | [DeliveryCoordinateRequestInput](../models/DeliveryCoordinateRequestInput.md#deliverycoordinaterequestinput) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`, `"coordinate"`. |

### DeliveryBuyerLocationResourceInput variant 1: `type` = `"address"`

oneOf variant 1: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryBuyerLocationResourceInput variant 2: `type` = `"coordinate"`

oneOf variant 2: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

