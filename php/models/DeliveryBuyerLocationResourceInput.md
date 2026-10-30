[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationResourceInput

The normalized buyer address or coordinate used for this quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [AddressInput](../models/AddressInput.md#addressinput) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `coordinate` | Conditional | [DeliveryCoordinateRequestInput](../models/DeliveryCoordinateRequestInput.md#deliverycoordinaterequestinput) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`, `"coordinate"`. |

### DeliveryBuyerLocationResourceInput variant 1: `type` = `"address"`

oneOf with type: "address": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryBuyerLocationResourceInput variant 2: `type` = `"coordinate"`

oneOf with type: "coordinate": The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

