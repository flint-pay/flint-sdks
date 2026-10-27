[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCheckoutDeliveryQuoteRequestInput

The request body for: Create delivery quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `basis_delivery_quote_id` | Optional | string | minLength: `1`. |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `destination_address` | Optional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | An address you supply for delivery quotes, previews, and selections. |
| `expected_delivery_selection_id` | Required | string or null | Current delivery selection ID used for compare-and-swap. Send null to assert that no selection exists. minLength: `1`. |
| `inventory_assignments` | Optional | Array of [DeliveryInventoryAssignmentRequestInput](../models/DeliveryInventoryAssignmentRequestInput.md#deliveryinventoryassignmentrequestinput) | maxItems: `1000`. |
| `method_results` | Optional | Array of [CallerSuppliedDeliveryMethodResultRequestInput](../models/CallerSuppliedDeliveryMethodResultRequestInput.md#callersupplieddeliverymethodresultrequestinput) |  |
| `pickup_location_id` | Optional | string | minLength: `1`. |
| `tier_key` | Optional | integer string | Caller-defined nonnegative lookup key used by methods whose tiered pricing basis is caller.tier_key. Merchant authentication is required. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

