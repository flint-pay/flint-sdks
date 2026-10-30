[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentQuantitiesInput

Counts of how much of an order line item is assigned, fulfilled, failed, canceled, or still unassigned for fulfillment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `assigned_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. Format: `int64`. |
| `bundle_component_id` | Optional | string | ID of the bundle component these quantities describe. Omitted for a single item. |
| `canceled_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. Format: `int64`. |
| `failed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. Format: `int64`. |
| `fulfilled_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. Format: `int64`. |
| `required_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Total quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other five quantity fields. Format: `int64`. |
| `unassigned_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Required quantity owned by no fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Format: `int64`. |

