[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDraftLineItemInventoryDemandRequestInput

The quantity of one inventory item that each unit of a draft order line item uses, supplied when creating the line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_item_id` | Required | string | ID of the inventory item each unit of the line item uses. minLength: `1`. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. |
| `quantity_per_line_item_unit` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `1`. maximum: `9999`. |

