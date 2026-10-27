[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationInputAddress







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | `address`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress), [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address). |
| `coordinate` | Optional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | A latitude and longitude. `coordinate`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate). |
| `type` | Required | string | Values: `"address"`. |

### DeliveryBuyerLocationInputAddress variant 1: `type` = `"address"`

anyOf variant 1: Declared schema DeliveryBuyerLocationInputAddress. The `address` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`coordinate`)).

### DeliveryBuyerLocationInputAddress variant 2: `type` = `"address"`

anyOf variant 2: Declared schema DeliveryBuyerLocationResourceAddress. The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).

### DeliveryBuyerLocationInputAddress variant 1.address

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.address](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress).

### DeliveryBuyerLocationInputAddress.coordinate

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.coordinate](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate).

### DeliveryBuyerLocationInputAddress variant 2.address

An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressRequest.md#deliveryaddressrequest).

