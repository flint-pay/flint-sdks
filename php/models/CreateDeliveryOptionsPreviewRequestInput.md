[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryOptionsPreviewRequestInput

The `delivery_options` variant of `CreateDeliveryPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequestInput](../models/DeliveryBuyerLocationRequestInput.md#deliverybuyerlocationrequestinput) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_method_ids` | Optional | Array of string | Delivery methods to evaluate. When omitted, uses settings.checkout.default_delivery_method_ids, or no methods when that setting is empty. Items: minLength: `1`. |
| `destination_address` | Optional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `inventory_routing_source` | Optional | [DeliveryPreviewRoutingSourceInput](../models/DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput) | Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `line_items` | Required | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | minItems: `1`. maxItems: `100`. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string | minLength: `1`. |
| `pricing_context` | Optional | Map of string | Map values: minLength: `1`. |

