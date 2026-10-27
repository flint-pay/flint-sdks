[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceQuickPayRequestInput

Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | A note to the buyer on the backing order, captured in snapshot.buyer_note. minLength: `1`. |
| `customer_id` | Optional | string | The customer to bill. The invoice shows their name and billing details, and GET /v1/invoices?customer_id= finds it. minLength: `1`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequestInput](../models/OrderDeliveryDestinationRequestInput.md#orderdeliverydestinationrequestinput) | Where the backing order's items are shipped or delivered, the same as order creation accepts. The delivery destination you set when creating or updating an order, with an address and an optional recipient. |
| `discounts` | Optional | Array of [CreateOrderDiscountInput](../models/CreateOrderDiscountInput.md#createorderdiscountinput) | Discounts to apply to the backing order, in the shape order creation accepts. |
| `internal_note` | Optional | string | A note for your team on the backing order. Buyer reads leave it out. minLength: `1`. |
| `inventory_routing_source` | Optional | [OrderInventoryRoutingSourceRequestInput](../models/OrderInventoryRoutingSourceRequestInput.md#orderinventoryroutingsourcerequestinput) | Where this invoice backing order's tracked demand is routed: a fixed Location, or an allocation policy. Required when any line tracks inventory. Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision. |
| `line_items` | Required | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | The items to bill, at least one, in the shape order creation accepts. A custom line without variant_id or bundle_id must set fulfillment.requirement. minItems: `1`. |
| `requested_tip` | Optional | [CreateOrderTipInput](../models/CreateOrderTipInput.md#createordertipinput) | A tip to request from the buyer on the backing order. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. |
| `tax` | Optional | [OrderTaxRequestInput](../models/OrderTaxRequestInput.md#ordertaxrequestinput) | Tax inputs for the backing order, the same as order creation accepts. Validation errors name fields under quick_pay.tax. Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location. |

