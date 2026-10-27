[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountResultInput

inventory_count is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_count` | Required | [InventoryCountInput](../models/InventoryCountInput.md#inventorycountinput) | A physical count used to reconcile stock. |
| `inventory_levels` | Required | Array of [InventoryLevelInput](../models/InventoryLevelInput.md#inventorylevelinput) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. |

