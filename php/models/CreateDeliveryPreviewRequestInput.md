[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryPreviewRequestInput

The request body for: Create delivery preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_method_ids` | Conditional | Array of string | Delivery methods to evaluate. When omitted, uses settings.checkout.default_delivery_method_ids, or no methods when that setting is empty. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `destination_address` | Conditional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | Destination address used to evaluate shipment and local delivery options. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `inventory_routing_source` | Conditional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | Where the preview allocates tracked stock: a fixed Location, the current revision of an allocation policy, or one policy revision. Required when any line item tracks inventory. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `line_items` | Conditional | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | Items to evaluate delivery for, from 1 to 100. minItems: `1`. maxItems: `100`. |
| `mode` | Required | string |  |
| `pickup_location_id` | Conditional | string | ID of the Location at which to price pickup methods. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `checkout_session_id` | Conditional | string | Checkout session whose pickup locations to evaluate. Checkout credentials must identify their own session. minLength: `1`. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `maximum_distance` | Conditional | [DeliveryPickupAvailabilityMaximumDistanceRequestInput](../models/DeliveryPickupAvailabilityMaximumDistanceRequestInput.md#deliverypickupavailabilitymaximumdistancerequestinput) | Farthest a pickup Location can be from the buyer location. Omit it to apply no limit. A maximum distance from the buyer location, as a value and unit, that limits which pickup locations a preview returns. |

### CreateDeliveryPreviewRequestInput variant 1: `mode` = `"delivery_options"`

oneOf with mode: "delivery_options": The `delivery_options` variant of `CreateDeliveryPreviewRequest`..

- Required: `currency`, `line_items`.
- Optional: `delivery_method_ids`, `destination_address`, `inventory_routing_source`, `pickup_location_id`.
- Undeclared: `checkout_session_id`, `maximum_distance`.
- Constraints for `buyer_location`: Buyer location used to evaluate pickup and local delivery availability.
- Constraints for `mode`: The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`.

### CreateDeliveryPreviewRequestInput variant 2: `mode` = `"pickup_locations"`

oneOf with mode: "pickup_locations": The `pickup_locations` variant of `CreateDeliveryPreviewRequest`..

- Required: `checkout_session_id`.
- Optional: `maximum_distance`.
- Undeclared: `currency`, `delivery_method_ids`, `destination_address`, `inventory_routing_source`, `line_items`, `pickup_location_id`.
- Constraints for `buyer_location`: Buyer location to measure pickup distance from. Locations are ordered nearest first when it is set.
- Constraints for `mode`: The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`.

