[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinate

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinateAddress](../models/DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinateAddress.md#deliveryselectioncommittedmerchanteventdataobjectbuyerlocationcoordinateaddress) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinate.md#deliveryselectioncommittedmerchanteventdataobjectbuyerlocationcoordinateaddress-fields-1). |
| `coordinate` | Required | [DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinateCoordinate](../models/DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinateCoordinate.md#deliveryselectioncommittedmerchanteventdataobjectbuyerlocationcoordinatecoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"coordinate"`. |

### DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationCoordinate.address fields 1

A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

