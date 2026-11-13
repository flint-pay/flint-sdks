[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFulfillmentLineItem

An order line item and quantity included in a buyer's fulfillment, with the line's modifiers.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string or null | Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. |
| `modifiers` | Optional | Array of [BuyerOrderLineItemModifier](../models/BuyerOrderLineItemModifier.md#buyerorderlineitemmodifier) | Modifier selections snapshotted from the order line for fulfillment. `modifiers[]`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_itemsmodifiers). |
| `order_id` | Required | string | Order that owns the referenced line item. |
| `order_line_item_id` | Required | string | Order line whose quantity is allocated to the fulfillment. |
| `quantity` | Required | integer | Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: `int64`. |

### BuyerFulfillmentLineItem.modifiers[]

Field definitions: [BuyerSubscriptionResponse.data.line_items[].modifiers[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_itemsmodifiers).

