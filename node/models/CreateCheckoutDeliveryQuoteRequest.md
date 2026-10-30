[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutDeliveryQuoteRequest

The request body for: Create delivery quote.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `basis_delivery_quote_id` | Optional | string | minLength: `1`. |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequest](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `destination_address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | Partial is fine when quoting: send what the buyer has entered, at least country. A destination_address sent with a selection must be complete; a selection that omits it uses the quote's destination, which may be partial. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `expected_delivery_selection_id` | Optional | string or null | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: `1`. |
| `inventory_assignments` | Optional | Array of [DeliveryInventoryAssignmentRequest](../models/DeliveryInventoryAssignmentRequest.md#deliveryinventoryassignmentrequest) | maxItems: `1000`. |
| `method_results` | Optional | Array of [CallerSuppliedDeliveryMethodResultRequest](../models/CallerSuppliedDeliveryMethodResultRequest.md#callersupplieddeliverymethodresultrequest) |  |
| `pickup_location_id` | Optional | string | minLength: `1`. |
| `tier_key` | Optional | integer | Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Format: `int64`. minimum: `0`. |

