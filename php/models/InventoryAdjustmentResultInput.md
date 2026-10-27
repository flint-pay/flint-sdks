[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentResultInput

Inventory adjustment and the levels it changed. inventory_adjustment is the primary resource and expected_version target.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_adjustment` | Required | [InventoryAdjustmentInput](../models/InventoryAdjustmentInput.md#inventoryadjustmentinput) | A recorded stock change with its reason and the quantity changes Flint computed. |
| `inventory_levels` | Required | Array of [InventoryLevelInput](../models/InventoryLevelInput.md#inventorylevelinput) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. |

