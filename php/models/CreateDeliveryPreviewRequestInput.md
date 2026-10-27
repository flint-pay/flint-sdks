[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryPreviewRequestInput

The request body for: Create delivery preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_method_ids` | Conditional | Array of string | Items: minLength: `1`. |
| `destination_address` | Conditional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | An address you supply for delivery quotes, previews, and selections. |
| `inventory_routing_source` | Conditional | [DeliveryPreviewRoutingSourceInput](../models/DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput) | Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `line_items` | Conditional | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | minItems: `1`. maxItems: `100`. |
| `mode` | Required | string |  |
| `pickup_location_id` | Conditional | string | minLength: `1`. |
| `pricing_context` | Conditional | Map of string | Map values: minLength: `1`. |
| `checkout_session_id` | Conditional | string | Checkout session whose pickup locations to evaluate. Checkout credentials must identify their own session. minLength: `1`. |
| `expected_delivery_selection_id` | Conditional | string or null | ID of the checkout's current delivery selection, as GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current returns it, or null when there is none. Any other value returns 409 DELIVERY_PICKUP_AVAILABILITY_CHANGED. The search does not change or release the selection. minLength: `1`. |
| `maximum_distance` | Conditional | [DeliveryPickupAvailabilityMaximumDistanceRequestInput](../models/DeliveryPickupAvailabilityMaximumDistanceRequestInput.md#deliverypickupavailabilitymaximumdistancerequestinput) | A maximum distance from the buyer location, as a value and unit, that limits which pickup locations a preview returns. |

### CreateDeliveryPreviewRequestInput variant 1: `mode` = `"delivery_options"`

oneOf variant 1: The `delivery_options` variant of `CreateDeliveryPreviewRequest`..

- Required: `currency`, `delivery_method_ids`, `line_items`.
- Optional: `destination_address`, `inventory_routing_source`, `pickup_location_id`, `pricing_context`.
- Undeclared: `checkout_session_id`, `expected_delivery_selection_id`, `maximum_distance`.
- Constraints for `mode`: The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`.

### CreateDeliveryPreviewRequestInput variant 2: `mode` = `"pickup_locations"`

oneOf variant 2: The `pickup_locations` variant of `CreateDeliveryPreviewRequest`..

- Required: `checkout_session_id`.
- Optional: `expected_delivery_selection_id`, `maximum_distance`.
- Undeclared: `currency`, `delivery_method_ids`, `destination_address`, `inventory_routing_source`, `line_items`, `pickup_location_id`, `pricing_context`.
- Constraints for `mode`: The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`.

