[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceQuickPayRequestInput

Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | minLength: `1`. |
| `customer_id` | Optional | string | minLength: `1`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequestInput](../models/OrderDeliveryDestinationRequestInput.md#orderdeliverydestinationrequestinput) | The delivery destination you set when creating or updating an order, with an address and an optional recipient. |
| `discounts` | Optional | Array of [CreateOrderDiscountInput](../models/CreateOrderDiscountInput.md#createorderdiscountinput) |  |
| `internal_note` | Optional | string | minLength: `1`. |
| `inventory_routing_source` | Optional | [OrderInventoryRoutingSourceRequestInput](../models/OrderInventoryRoutingSourceRequestInput.md#orderinventoryroutingsourcerequestinput) | Where this invoice backing order's tracked demand is routed: a fixed Location, or an allocation policy. Required when any line tracks inventory. Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision. |
| `line_items` | Required | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | minItems: `1`. |
| `requested_tip` | Optional | [CreateOrderTipInput](../models/CreateOrderTipInput.md#createordertipinput) | Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. |
| `tax` | Optional | [OrderTaxRequestInput](../models/OrderTaxRequestInput.md#ordertaxrequestinput) | Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location. |

