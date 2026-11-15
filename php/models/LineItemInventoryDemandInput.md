[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventoryDemandInput

The quantity of one inventory item that each unit of an order line item uses.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string | ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `component_snapshot_id` | Optional | string | Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. Example: `"component-1842"`. |
| `inventory_item_id` | Required | string | ID of the inventory item each unit of the line item uses. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `quantity_per_line_item_unit` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

