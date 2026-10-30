[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutDeliveryQuoteRequestInput

The request body for: Create delivery quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `basis_delivery_quote_id` | Optional | string | minLength: `1`. |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `destination_address` | Optional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | Partial is fine when quoting: send what the buyer has entered, at least country. A destination_address sent with a selection must be complete; a selection that omits it uses the quote's destination, which may be partial. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `expected_delivery_selection_id` | Optional | string or null | Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: `1`. |
| `inventory_assignments` | Optional | Array of [DeliveryInventoryAssignmentRequestInput](../models/DeliveryInventoryAssignmentRequestInput.md#deliveryinventoryassignmentrequestinput) | maxItems: `1000`. |
| `method_results` | Optional | Array of [CallerSuppliedDeliveryMethodResultRequestInput](../models/CallerSuppliedDeliveryMethodResultRequestInput.md#callersupplieddeliverymethodresultrequestinput) |  |
| `pickup_location_id` | Optional | string | minLength: `1`. |
| `tier_key` | Optional | integer | Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Format: `int64`. minimum: `0`. |

