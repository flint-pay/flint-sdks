[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceQuickPayRequest

Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | minLength: `1`. |
| `customer_id` | Optional | string | minLength: `1`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequest](../models/OrderDeliveryDestinationRequest.md#orderdeliverydestinationrequest) | The delivery destination you set when creating or updating an order, with an address and an optional recipient. |
| `discounts` | Optional | Array of [CreateOrderDiscount](../models/CreateOrderDiscount.md#createorderdiscount) |  |
| `internal_note` | Optional | string | minLength: `1`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where this invoice backing order's tracked demand is routed: a fixed Location, or an allocation policy. Required when any line tracks inventory. Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision. `inventory_routing_source`: [field definitions](../models/CreateInvoiceQuickPayRequest.md#createinvoicequickpayrequestinventory_routing_source). |
| `line_items` | Required | Array of [CreateOrderLineItem](../models/CreateOrderLineItem.md#createorderlineitem) | minItems: `1`. `line_items[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_items). |
| `requested_tip` | Optional | [CreateOrderTip](../models/CreateOrderTip.md#createordertip) | Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. |
| `tax` | Optional | [OrderTaxRequest](../models/OrderTaxRequest.md#ordertaxrequest) | Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location. |

### CreateInvoiceQuickPayRequest.inventory_routing_source

Where this invoice backing order's tracked demand is routed: a fixed Location, or an allocation policy. Required when any line tracks inventory. Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision.

Field definitions: [shared fields](DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput).

### CreateInvoiceQuickPayRequest.line_items[]

Declared alternatives: [AddLineItemsRequest.line_items[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_items).

