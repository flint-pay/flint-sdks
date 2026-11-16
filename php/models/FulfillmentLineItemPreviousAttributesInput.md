[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. `bundle_component_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributesInput.md#fulfillmentlineitempreviousattributesinputbundle_component_id). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput) or null | Modifier selections snapshotted from the order line for fulfillment. `modifiers`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributesInput.md#fulfillmentlineitempreviousattributesinputmodifiers). |
| `order_id` | Optional | string or null | Order that owns the referenced line item. `order_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributesInput.md#fulfillmentlineitempreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | Order line whose quantity is allocated to the fulfillment. `order_line_item_id`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributesInput.md#fulfillmentlineitempreviousattributesinputorder_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. `quantity`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributesInput.md#fulfillmentlineitempreviousattributesinputquantity). |

### FulfillmentLineItemPreviousAttributesInput.bundle_component_id

### FulfillmentLineItemPreviousAttributesInput.bundle_component_id variant 1

anyOf variant 1: Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components..

- Value shape: string. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### FulfillmentLineItemPreviousAttributesInput.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. 

### FulfillmentLineItemPreviousAttributesInput.modifiers

### FulfillmentLineItemPreviousAttributesInput.modifiers variant 1

anyOf variant 1: Modifier selections snapshotted from the order line for fulfillment..

- Value shape: Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput). Modifier selections snapshotted from the order line for fulfillment. 

### FulfillmentLineItemPreviousAttributesInput.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifier selections snapshotted from the order line for fulfillment. 

### FulfillmentLineItemPreviousAttributesInput.order_id

### FulfillmentLineItemPreviousAttributesInput.order_id variant 1

anyOf variant 1: Order that owns the referenced line item..

- Value shape: string. Order that owns the referenced line item. Order that owns the referenced line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### FulfillmentLineItemPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the referenced line item. 

### FulfillmentLineItemPreviousAttributesInput.order_line_item_id

### FulfillmentLineItemPreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: Order line whose quantity is allocated to the fulfillment..

- Value shape: string. Order line whose quantity is allocated to the fulfillment. Order line whose quantity is allocated to the fulfillment. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### FulfillmentLineItemPreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Order line whose quantity is allocated to the fulfillment. 

### FulfillmentLineItemPreviousAttributesInput.quantity

### FulfillmentLineItemPreviousAttributesInput.quantity variant 1

anyOf variant 1: Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: `int64`. 

### FulfillmentLineItemPreviousAttributesInput.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. 

