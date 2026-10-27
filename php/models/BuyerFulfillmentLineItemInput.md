[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFulfillmentLineItemInput

An order line item and quantity included in a buyer's fulfillment, with the line's modifiers.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifiers` | Optional | Array of [BuyerOrderLineItemModifierInput](../models/BuyerOrderLineItemModifierInput.md#buyerorderlineitemmodifierinput) | Modifier selections snapshotted from the order line for fulfillment. |
| `order_line_item_id` | Required | string | Order line whose quantity is allocated to the fulfillment. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

