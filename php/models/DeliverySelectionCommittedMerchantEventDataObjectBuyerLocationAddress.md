[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddress

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddressAddress](../models/DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddressAddress.md#deliveryselectioncommittedmerchanteventdataobjectbuyerlocationaddressaddress) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddress.md#deliveryselectioncommittedmerchanteventdataobjectbuyerlocationaddressaddress-fields-1). |
| `coordinate` | Optional | [DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddressCoordinate](../models/DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddressCoordinate.md#deliveryselectioncommittedmerchanteventdataobjectbuyerlocationaddresscoordinate) | A latitude and longitude. |
| `type` | Required | string | Values: `"address"`. |

### DeliverySelectionCommittedMerchantEventDataObjectBuyerLocationAddress.address fields 1

A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

