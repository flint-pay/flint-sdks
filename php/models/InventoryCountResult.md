[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountResult

inventory_count is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_count` | Required | [InventoryCount](../models/InventoryCount.md#inventorycount) | A physical count used to reconcile stock. |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. |

