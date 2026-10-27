[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutDeliveryQuoteRequest

The request body for: Create delivery quote.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `basis_delivery_quote_id` | Optional | string | minLength: `1`. |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequest](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. `buyer_location`: [declared alternatives](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_location). |
| `destination_address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | An address you supply for delivery quotes, previews, and selections. `destination_address`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress). |
| `expected_delivery_selection_id` | Required | string or null | Current delivery selection ID used for compare-and-swap. Send null to assert that no selection exists. minLength: `1`. |
| `inventory_assignments` | Optional | Array of [DeliveryInventoryAssignmentRequest](../models/DeliveryInventoryAssignmentRequest.md#deliveryinventoryassignmentrequest) | maxItems: `1000`. |
| `method_results` | Optional | Array of [CallerSuppliedDeliveryMethodResultRequest](../models/CallerSuppliedDeliveryMethodResultRequest.md#callersupplieddeliverymethodresultrequest) |  |
| `pickup_location_id` | Optional | string | minLength: `1`. |
| `tier_key` | Optional | integer string | Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### CreateCheckoutDeliveryQuoteRequest.buyer_location

The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | An address you supply for delivery quotes, previews, and selections. `address`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress). |
| `coordinate` | Conditional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | A latitude and longitude. `coordinate`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate). |
| `type` | Required | string | Values: `"address"`, `"coordinate"`. |

### CreateCheckoutDeliveryQuoteRequest.buyer_location variant 1: `type` = `"address"`

oneOf variant 1: The `address` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### CreateCheckoutDeliveryQuoteRequest.buyer_location variant 2: `type` = `"coordinate"`

oneOf variant 2: The `coordinate` variant of `DeliveryBuyerLocationInput`..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### CreateCheckoutDeliveryQuoteRequest.buyer_location.address

An address you supply for delivery quotes, previews, and selections.

Field definitions: [shared fields](DeliveryAddressRequestInput.md#deliveryaddressrequestinput).

### CreateCheckoutDeliveryQuoteRequest.buyer_location.coordinate

A latitude and longitude.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `latitude` | Required | number | minimum: `-90`. maximum: `90`. |
| `longitude` | Required | number | minimum: `-180`. maximum: `180`. |

### CreateCheckoutDeliveryQuoteRequest.destination_address

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.address](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress).

