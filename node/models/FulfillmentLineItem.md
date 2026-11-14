[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentLineItem

An order line item and quantity included in a fulfillment, with the modifiers applied to it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string or null | Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | Modifier selections snapshotted from the order line for fulfillment. |
| `order_id` | Required | string | Order that owns the referenced line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | Order line whose quantity is allocated to the fulfillment. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: `int64`. |

