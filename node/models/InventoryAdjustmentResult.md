[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentResult

Inventory adjustment and the levels it changed. inventory_adjustment is the primary resource and expected_version target.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_adjustment` | Required | [InventoryAdjustment](../models/InventoryAdjustment.md#inventoryadjustment) | A recorded stock change with its reason and the quantity changes Flint computed. |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. |

