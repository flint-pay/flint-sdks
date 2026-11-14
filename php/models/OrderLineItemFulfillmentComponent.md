[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemFulfillmentComponent

Fulfillment requirements for one component of a bundle line item, with the component quantity per unit.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string | ID of the bundle component these requirements apply to. |
| `profile` | Required | [OrderLineItemFulfillmentProfile](../models/OrderLineItemFulfillmentProfile.md#orderlineitemfulfillmentprofile) | Fulfillment requirements for this component. Whether an order line item requires fulfillment, and the fulfillment types it allows. |
| `quantity_per_line_item_unit` | Required | integer | Number of this component per unit of the order line item; fractional quantities are not supported. Format: `int64`. |

