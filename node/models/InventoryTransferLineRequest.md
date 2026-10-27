[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferLineRequest

One line of an inventory transfer you create: an item and the requested quantity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `condition` | Optional | string | Default: `"sellable"`. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `inventory_item_id` | Required | string | minLength: `1`. |
| `requested_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

