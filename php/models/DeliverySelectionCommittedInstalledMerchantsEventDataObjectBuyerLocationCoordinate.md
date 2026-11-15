[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinate

The normalized buyer address or coordinate used for this quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateAddress](../models/DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateAddress.md#deliveryselectioncommittedinstalledmerchantseventdataobjectbuyerlocationcoordinateaddress) | The buyer location as an address. Set only when `type` is `address`. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinate.md#deliveryselectioncommittedinstalledmerchantseventdataobjectbuyerlocationcoordinateaddress-fields-1). |
| `coordinate` | Required | [DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateCoordinate](../models/DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinateCoordinate.md#deliveryselectioncommittedinstalledmerchantseventdataobjectbuyerlocationcoordinatecoordinate) | The buyer location as a coordinate. Set only when `type` is `coordinate`. A latitude and longitude. |
| `type` | Required | string | Whether the buyer location is an address or a coordinate. Values: `"coordinate"`. |

### DeliverySelectionCommittedInstalledMerchantsEventDataObjectBuyerLocationCoordinate.address fields 1

The buyer location as an address. Set only when `type` is `address`. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

