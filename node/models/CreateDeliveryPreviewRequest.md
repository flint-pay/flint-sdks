[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryPreviewRequest

The request body for: Create delivery preview.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequest](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. `buyer_location`: [declared alternatives](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_location). |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_method_ids` | Conditional | Array of string | Items: minLength: `1`. |
| `destination_address` | Conditional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | An address you supply for delivery quotes, previews, and selections. `destination_address`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress). |
| `inventory_routing_source` | Conditional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/CreateDeliveryOptionsPreviewRequest.md#createdeliveryoptionspreviewrequestinventory_routing_source). |
| `line_items` | Conditional | Array of [CreateOrderLineItem](../models/CreateOrderLineItem.md#createorderlineitem) | minItems: `1`. maxItems: `100`. `line_items[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_items). |
| `mode` | Required | string |  |
| `pickup_location_id` | Conditional | string | minLength: `1`. |
| `pricing_context` | Conditional | Map of string | Map values: minLength: `1`. |
| `checkout_session_id` | Conditional | string | Checkout session whose pickup locations to evaluate. Checkout credentials must identify their own session. minLength: `1`. |
| `expected_delivery_selection_id` | Conditional | string or null | ID of the checkout's current delivery selection, as GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current returns it, or null when there is none. Any other value returns 409 DELIVERY_PICKUP_AVAILABILITY_CHANGED. The search does not change or release the selection. minLength: `1`. |
| `maximum_distance` | Conditional | [DeliveryDistance](../models/DeliveryDistance.md#deliverydistance) | A maximum distance from the buyer location, as a value and unit, that limits which pickup locations a preview returns. `maximum_distance`: [field definitions](../models/CreateDeliveryPickupLocationsPreviewRequest.md#createdeliverypickuplocationspreviewrequestmaximum_distance). |

### CreateDeliveryPreviewRequest variant 1: `mode` = `"delivery_options"`

oneOf variant 1: The `delivery_options` variant of `CreateDeliveryPreviewRequest`..

- Required: `currency`, `delivery_method_ids`, `line_items`.
- Optional: `destination_address`, `inventory_routing_source`, `pickup_location_id`, `pricing_context`.
- Undeclared: `checkout_session_id`, `expected_delivery_selection_id`, `maximum_distance`.
- Constraints for `mode`: The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`.

### CreateDeliveryPreviewRequest variant 2: `mode` = `"pickup_locations"`

oneOf variant 2: The `pickup_locations` variant of `CreateDeliveryPreviewRequest`..

- Required: `checkout_session_id`.
- Optional: `expected_delivery_selection_id`, `maximum_distance`.
- Undeclared: `currency`, `delivery_method_ids`, `destination_address`, `inventory_routing_source`, `line_items`, `pickup_location_id`, `pricing_context`.
- Constraints for `mode`: The delivery question this preview answers. - `pickup_locations`: Lists the checkout session's pickup locations and whether each can supply its items. Values: `"pickup_locations"`.

### CreateDeliveryPreviewRequest.buyer_location

Declared alternatives: [CreateCheckoutDeliveryQuoteRequest.buyer_location](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_location).

### CreateDeliveryPreviewRequest variant 1.destination_address

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.address](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress).

### CreateDeliveryPreviewRequest variant 1.inventory_routing_source

Field definitions: [CreateDeliveryOptionsPreviewRequest.inventory_routing_source](../models/CreateDeliveryOptionsPreviewRequest.md#createdeliveryoptionspreviewrequestinventory_routing_source).

### CreateDeliveryPreviewRequest variant 1.line_items[]

Declared alternatives: [AddLineItemsRequest.line_items[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_items).

### CreateDeliveryPreviewRequest variant 2.maximum_distance

Field definitions: [CreateDeliveryPickupLocationsPreviewRequest.maximum_distance](../models/CreateDeliveryPickupLocationsPreviewRequest.md#createdeliverypickuplocationspreviewrequestmaximum_distance).

