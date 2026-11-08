[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateOrderRequest

The request body for: Create order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | A note to the buyer. minLength: `1`. maxLength: `1000`. |
| `customer_id` | Optional | string | ID of the customer this order belongs to. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequest](../models/OrderDeliveryDestinationRequest.md#orderdeliverydestinationrequest) | Shipment or local-delivery destination for an order created without a delivery selection. The delivery destination you set when creating or updating an order, with an address and an optional recipient. |
| `discounts` | Optional | Array of [CreateOrderDiscount](../models/CreateOrderDiscount.md#createorderdiscount) | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `internal_note` | Optional | string | A note for your team. Buyer reads leave it out. minLength: `1`. maxLength: `1000`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | How Flint chooses the Locations that fill this order's inventory: one fixed Location, an allocation policy, or a specific policy revision. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `line_items` | Required | Array of [CreateOrderLineItem](../models/CreateOrderLineItem.md#createorderlineitem) | Items the order sells, each with its pricing, tax, and fulfillment quantities. minItems: `1`. `line_items[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_items). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `requested_tip` | Optional | [CreateOrderTip](../models/CreateOrderTip.md#createordertip) | Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. |
| `tax` | Optional | [OrderTaxRequest](../models/OrderTaxRequest.md#ordertaxrequest) | Tax settings for the order. Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location. |

### CreateOrderRequest.line_items[]

Declared alternatives: [AddLineItemsRequest.line_items[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_items).

### CreateOrderRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

