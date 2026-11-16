[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null or null | Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. `bundle_component_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesbundle_component_id). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifier selections snapshotted from the order line for fulfillment. `modifiers`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers). |
| `order_id` | Optional | string or null | Order that owns the referenced line item. `order_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | Order line whose quantity is allocated to the fulfillment. `order_line_item_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesorder_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. `quantity`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesquantity). |

### FulfillmentLineItemPreviousAttributes.bundle_component_id

### FulfillmentLineItemPreviousAttributes.bundle_component_id variant 1

anyOf variant 1: Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components..

- Value shape: (string or null). Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### FulfillmentLineItemPreviousAttributes.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. 

### FulfillmentLineItemPreviousAttributes.modifiers

### FulfillmentLineItemPreviousAttributes.modifiers variant 1

anyOf variant 1: Modifier selections snapshotted from the order line for fulfillment..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). Modifier selections snapshotted from the order line for fulfillment. 

### FulfillmentLineItemPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifier selections snapshotted from the order line for fulfillment. 

### FulfillmentLineItemPreviousAttributes.order_id

### FulfillmentLineItemPreviousAttributes.order_id variant 1

anyOf variant 1: Order that owns the referenced line item..

- Value shape: string. Order that owns the referenced line item. Order that owns the referenced line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### FulfillmentLineItemPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the referenced line item. 

### FulfillmentLineItemPreviousAttributes.order_line_item_id

### FulfillmentLineItemPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: Order line whose quantity is allocated to the fulfillment..

- Value shape: string. Order line whose quantity is allocated to the fulfillment. Order line whose quantity is allocated to the fulfillment. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### FulfillmentLineItemPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Order line whose quantity is allocated to the fulfillment. 

### FulfillmentLineItemPreviousAttributes.quantity

### FulfillmentLineItemPreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: `int64`. 

### FulfillmentLineItemPreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. 

