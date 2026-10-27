[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferResult

inventory_transfer is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. |
| `inventory_transfer` | Required | [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer) | Stock moving between locations. |

