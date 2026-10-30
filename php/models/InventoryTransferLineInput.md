[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferLineInput

One line of an inventory transfer, with the requested quantity and how much has departed, been received by condition, canceled, lost, or returned.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `condition` | Required | string | Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. |
| `departed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inventory_item_id` | Required | string |  |
| `inventory_transfer_line_id` | Required | string |  |
| `lost_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_damaged_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_quality_control_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_quarantined_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `received_sellable_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `returned_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

