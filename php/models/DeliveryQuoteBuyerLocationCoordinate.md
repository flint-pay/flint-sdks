[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteBuyerLocationCoordinate

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryQuoteBuyerLocationCoordinateAddress](../models/DeliveryQuoteBuyerLocationCoordinateAddress.md#deliveryquotebuyerlocationcoordinateaddress) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliveryQuoteBuyerLocationCoordinate.md#deliveryquotebuyerlocationcoordinateaddress-fields-1). |
| `coordinate` | Required | [DeliveryQuoteBuyerLocationCoordinateCoordinate](../models/DeliveryQuoteBuyerLocationCoordinateCoordinate.md#deliveryquotebuyerlocationcoordinatecoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"coordinate"`. |

### DeliveryQuoteBuyerLocationCoordinate.address fields 1

A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

