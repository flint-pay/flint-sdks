[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceQuickPayRequest

Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | A note to the buyer on the backing order, captured in snapshot.buyer_note. minLength: `1`. |
| `customer_id` | Optional | string | The customer to bill. The invoice shows their name and billing details, and GET /v1/invoices?customer_id= finds it. minLength: `1`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequest](../models/OrderDeliveryDestinationRequest.md#orderdeliverydestinationrequest) | Where the backing order's items are shipped or delivered, the same as order creation accepts. The delivery destination you set when creating or updating an order, with an address and an optional recipient. |
| `discounts` | Optional | Array of [CreateOrderDiscount](../models/CreateOrderDiscount.md#createorderdiscount) | Discounts to apply to the backing order, in the shape order creation accepts. |
| `internal_note` | Optional | string | A note for your team on the backing order. Buyer reads leave it out. minLength: `1`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where this invoice backing order's tracked demand is routed: a fixed Location, or an allocation policy. Required when any line tracks inventory. Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision. `inventory_routing_source`: [field definitions](../models/CreateInvoiceQuickPayRequest.md#createinvoicequickpayrequestinventory_routing_source). |
| `line_items` | Required | Array of [CreateOrderLineItem](../models/CreateOrderLineItem.md#createorderlineitem) | The items to bill, at least one, in the shape order creation accepts. A custom line without variant_id or bundle_id must set fulfillment.requirement. minItems: `1`. `line_items[]`: [declared alternatives](../models/AddLineItemsRequest.md#addlineitemsrequestline_items). |
| `requested_tip` | Optional | [CreateOrderTip](../models/CreateOrderTip.md#createordertip) | A tip to request from the buyer on the backing order. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. |
| `tax` | Optional | [OrderTaxRequest](../models/OrderTaxRequest.md#ordertaxrequest) | Tax inputs for the backing order, the same as order creation accepts. Validation errors name fields under quick_pay.tax. Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location. |

### CreateInvoiceQuickPayRequest.inventory_routing_source

Where this invoice backing order's tracked demand is routed: a fixed Location, or an allocation policy. Required when any line tracks inventory. Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision.

Field definitions: [shared fields](DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput).

### CreateInvoiceQuickPayRequest.line_items[]

Declared alternatives: [AddLineItemsRequest.line_items[]](../models/AddLineItemsRequest.md#addlineitemsrequestline_items).

