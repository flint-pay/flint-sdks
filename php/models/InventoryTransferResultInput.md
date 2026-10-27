[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferResultInput

inventory_transfer is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_levels` | Required | Array of [InventoryLevelInput](../models/InventoryLevelInput.md#inventorylevelinput) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. |
| `inventory_transfer` | Required | [InventoryTransferInput](../models/InventoryTransferInput.md#inventorytransferinput) | Stock moving between locations. |

