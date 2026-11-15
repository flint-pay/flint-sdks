[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventoryDemand

The quantity of one inventory item that each unit of an order line item uses.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string | ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. |
| `component_snapshot_id` | Optional | string | Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. |
| `inventory_item_id` | Required | string | ID of the inventory item each unit of the line item uses. |
| `quantity_per_line_item_unit` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

