[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryOptionsPreviewRequest

The `delivery_options` variant of `CreateDeliveryPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequest](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | Buyer location used to evaluate pickup and local delivery availability. The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_method_ids` | Optional | Array of string | Delivery methods to evaluate. When omitted, uses settings.checkout.default_delivery_method_ids, or no methods when that setting is empty. Items: minLength: `1`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `destination_address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | Destination address used to evaluate shipment and local delivery options. A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | Where the preview allocates tracked stock: a fixed Location, the current revision of an allocation policy, or one policy revision. Required when any line item tracks inventory. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `line_items` | Required | Array of [CreateOrderLineItemRequest](../models/CreateOrderLineItemRequest.md#createorderlineitemrequest) | Items to evaluate delivery for, from 1 to 100. minItems: `1`. maxItems: `100`. |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string | ID of the Location at which to price pickup methods. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

