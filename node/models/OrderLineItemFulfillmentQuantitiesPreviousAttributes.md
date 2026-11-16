[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentQuantitiesPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `assigned_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. `assigned_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesassigned_quantity). |
| `bundle_component_id` | Optional | string or null | ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. `bundle_component_id`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesbundle_component_id). |
| `canceled_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. `canceled_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributescanceled_quantity). |
| `failed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. `failed_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesfailed_quantity). |
| `fulfilled_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. `fulfilled_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesfulfilled_quantity). |
| `removed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment. `removed_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesremoved_quantity). |
| `required_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields. `required_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesrequired_quantity). |
| `unassigned_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends. `unassigned_quantity`: [declared alternatives](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributesunassigned_quantity). |

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.assigned_quantity

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.assigned_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. Format: `int64`. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.assigned_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.bundle_component_id

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component these quantities describe. `null` when the line isn't a bundle component..

- Value shape: string. ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.canceled_quantity

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.canceled_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. Format: `int64`. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.canceled_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.failed_quantity

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.failed_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. Format: `int64`. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.failed_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.fulfilled_quantity

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.fulfilled_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. Format: `int64`. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.fulfilled_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.removed_quantity

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.removed_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment. Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment. Format: `int64`. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.removed_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.required_quantity

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.required_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields. Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields. Format: `int64`. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.required_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.unassigned_quantity

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.unassigned_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends. Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends. Format: `int64`. 

### OrderLineItemFulfillmentQuantitiesPreviousAttributes.unassigned_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends. 

