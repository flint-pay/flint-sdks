[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBuyerLocationRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | `address`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress), [field definitions](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address). |
| `coordinate` | Conditional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | A latitude and longitude. `coordinate`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate). |
| `type` | Required | string | Values: `"address"`, `"coordinate"`. |

### DeliveryBuyerLocationRequest variant 1: `type` = `"address"`

anyOf variant 1: Declared schema DeliveryBuyerLocationRequest. The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.; oneOf variant 1: The `address` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryBuyerLocationRequest variant 2: `type` = `"coordinate"`

anyOf variant 1: Declared schema DeliveryBuyerLocationRequest. The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.; oneOf variant 2: The `coordinate` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliveryBuyerLocationRequest variant 3: `type` = `"address"`

anyOf variant 2: Declared schema DeliveryBuyerLocationResource. The normalized buyer address or coordinate used for this quote.; oneOf variant 1: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliveryBuyerLocationRequest variant 4: `type` = `"coordinate"`

anyOf variant 2: Declared schema DeliveryBuyerLocationResource. The normalized buyer address or coordinate used for this quote.; oneOf variant 2: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliveryBuyerLocationRequest variant 1.address

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.address](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress).

### DeliveryBuyerLocationRequest.coordinate

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.coordinate](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate).

### DeliveryBuyerLocationRequest variant 2.address

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.address](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress).

### DeliveryBuyerLocationRequest variant 3.address

Field definitions: [DeliveryBuyerLocationInputAddress variant 2.address](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address).

### DeliveryBuyerLocationRequest variant 4.address

Field definitions: [DeliveryBuyerLocationInputAddress variant 2.address](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address).

