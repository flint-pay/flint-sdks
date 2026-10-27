[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentComponentInput

Fulfillment requirements for one component of a bundle line item, with the component quantity per unit.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string | ID of the bundle component these requirements apply to. |
| `profile` | Required | [OrderLineItemFulfillmentProfileInput](../models/OrderLineItemFulfillmentProfileInput.md#orderlineitemfulfillmentprofileinput) or null | Fulfillment requirements for this component. |
| `quantity_per_line_item_unit` | Required | integer string | Number of this component per unit of the order line item; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

