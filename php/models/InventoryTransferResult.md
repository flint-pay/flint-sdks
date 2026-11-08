[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferResult

inventory_transfer is the primary resource and expected_version target. Stock-moving actions return this result instead of a resource alone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. `inventory_levels[]`: [field definitions](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata). |
| `inventory_transfer` | Required | [InventoryTransfer](../models/InventoryTransfer.md#inventorytransfer) | The inventory transfer. Stock moving between locations. `inventory_transfer`: [field definitions](../models/InventoryTransferResult.md#inventorytransferresultinventory_transfer). |

### InventoryTransferResult.inventory_levels[]

Field definitions: [InventoryLevelListResponse.data[]](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata).

### InventoryTransferResult.inventory_transfer

The inventory transfer. Stock moving between locations.

Field definitions: [shared fields](InventoryTransferResponse.md#inventorytransferresponsedata).

### InventoryTransferResult.inventory_transfer.lines[]

Field definitions: [InventoryTransferResponse.data.lines[]](../models/InventoryTransferResponse.md#inventorytransferresponsedatalines).

