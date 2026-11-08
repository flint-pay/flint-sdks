[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferLine

One line of an inventory transfer, with its quantities.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `condition` | Required | string | Condition of the units being moved. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `departed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item_id` | Required | string | ID of the inventory item to move. |
| `inventory_transfer_line_id` | Required | string | Unique identifier for this inventory transfer line, prefixed `invtrln_`. |
| `lost_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_damaged_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_quality_control_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_quarantined_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_sellable_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `returned_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

