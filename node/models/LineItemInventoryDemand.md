[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemInventoryDemand

The quantity of one inventory item that each unit of an order line item uses.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string |  |
| `component_snapshot_id` | Optional | string |  |
| `inventory_item_id` | Required | string |  |
| `quantity_per_line_item_unit` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

