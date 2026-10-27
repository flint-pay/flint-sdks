[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDraftLineItemInventoryDemandRequest

The quantity of one inventory item that each unit of a draft order line item uses, supplied when creating the line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `quantity_per_line_item_unit` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `9999`. |

