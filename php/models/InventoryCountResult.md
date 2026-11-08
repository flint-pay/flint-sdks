[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountResult

inventory_count is the primary resource and expected_version target. Stock-moving actions return this result instead of a resource alone.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_count` | Required | [InventoryCount](../models/InventoryCount.md#inventorycount) | The inventory count. A physical count used to reconcile stock. `inventory_count`: [field definitions](../models/InventoryCountResult.md#inventorycountresultinventory_count). |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. `inventory_levels[]`: [field definitions](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata). |

### InventoryCountResult.inventory_count

The inventory count. A physical count used to reconcile stock.

Field definitions: [shared fields](InventoryCountResponse.md#inventorycountresponsedata).

### InventoryCountResult.inventory_count.lines[]

Field definitions: [InventoryCountResponse.data.lines[]](../models/InventoryCountResponse.md#inventorycountresponsedatalines).

### InventoryCountResult.inventory_count.observation_provenance

Field definitions: [InventoryCountResponse.data.observation_provenance](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenance).

### InventoryCountResult.inventory_levels[]

Field definitions: [InventoryLevelListResponse.data[]](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata).

