[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryAdjustmentResult

Inventory adjustment and the levels it changed. inventory_adjustment is the primary resource and expected_version target.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_adjustment` | Required | [InventoryAdjustment](../models/InventoryAdjustment.md#inventoryadjustment) | The recorded adjustment. A recorded stock change with its reason and the quantity changes Flint computed. `inventory_adjustment`: [field definitions](../models/InventoryAdjustmentResult.md#inventoryadjustmentresultinventory_adjustment). |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. `inventory_levels[]`: [field definitions](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata). |

### InventoryAdjustmentResult.inventory_adjustment

The recorded adjustment. A recorded stock change with its reason and the quantity changes Flint computed.

Field definitions: [shared fields](InventoryAdjustmentResponse.md#inventoryadjustmentresponsedata).

### InventoryAdjustmentResult.inventory_adjustment.lines[]

Field definitions: [InventoryAdjustmentResponse.data.lines[]](../models/InventoryAdjustmentResponse.md#inventoryadjustmentresponsedatalines).

### InventoryAdjustmentResult.inventory_adjustment.source_system

Declared alternatives: [InventoryCountResponse.data.observation_provenance.source_system](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system).

### InventoryAdjustmentResult.inventory_levels[]

Field definitions: [InventoryLevelListResponse.data[]](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata).

