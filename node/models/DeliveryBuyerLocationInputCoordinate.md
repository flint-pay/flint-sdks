[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationInputCoordinate







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | `address`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress), [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address). |
| `coordinate` | Required | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | A latitude and longitude. `coordinate`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate). |
| `type` | Required | string | Values: `"coordinate"`. |

### DeliveryBuyerLocationInputCoordinate variant 1: `type` = `"coordinate"`

anyOf variant 1: Declared schema DeliveryBuyerLocationInputCoordinate. The `coordinate` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`address`)).

### DeliveryBuyerLocationInputCoordinate variant 2: `type` = `"coordinate"`

anyOf variant 2: Declared schema DeliveryBuyerLocationResourceCoordinate. The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).

### DeliveryBuyerLocationInputCoordinate variant 1.address

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.address](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress).

### DeliveryBuyerLocationInputCoordinate.coordinate

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.coordinate](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate).

### DeliveryBuyerLocationInputCoordinate variant 2.address

Field definitions: [DeliveryBuyerLocationInputAddress variant 2.address](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address).

