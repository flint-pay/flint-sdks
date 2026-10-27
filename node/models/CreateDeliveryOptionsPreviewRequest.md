[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryOptionsPreviewRequest

The `delivery_options` variant of `CreateDeliveryPreviewRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequest](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | The buyer's location for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`. `buyer_location`: [declared alternatives](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_location). |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_method_ids` | Required | Array of string | Items: minLength: `1`. |
| `destination_address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | An address you supply for delivery quotes, previews, and selections. `destination_address`: [field definitions](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress). |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/CreateDeliveryOptionsPreviewRequest.md#createdeliveryoptionspreviewrequestinventory_routing_source). |
| `line_items` | Required | Array of [CreateOrderLineItem](../models/CreateOrderLineItem.md#createorderlineitem) | minItems: `1`. maxItems: `100`. `line_items[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_items). |
| `mode` | Required | string | The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods and prices for the supplied items and buyer location. Values: `"delivery_options"`. |
| `pickup_location_id` | Optional | string | minLength: `1`. |
| `pricing_context` | Optional | Map of string | Map values: minLength: `1`. |

### CreateDeliveryOptionsPreviewRequest.buyer_location

Declared alternatives: [CreateCheckoutDeliveryQuoteRequest.buyer_location](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_location).

### CreateDeliveryOptionsPreviewRequest.destination_address

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.address](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationaddress).

### CreateDeliveryOptionsPreviewRequest.inventory_routing_source

Chooses where a delivery options preview routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.

Field definitions: [shared fields](DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput).

### CreateDeliveryOptionsPreviewRequest.line_items[]

Declared alternatives: [AddLineItemsRequest.line_items[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_items).

