[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptResult

Inventory receipt and the levels it changed. inventory_receipt is the primary resource and expected_version target.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. `inventory_levels[]`: [field definitions](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata). |
| `inventory_receipt` | Required | [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt) | The recorded receipt. Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. For supplier deliveries, use POST /v1/inventory-adjustments with reason: received. `inventory_receipt`: [field definitions](../models/InventoryReceiptResult.md#inventoryreceiptresultinventory_receipt). |

### InventoryReceiptResult.inventory_levels[]

Field definitions: [InventoryLevelListResponse.data[]](../models/InventoryLevelListResponse.md#inventorylevellistresponsedata).

### InventoryReceiptResult.inventory_receipt

The recorded receipt. Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. For supplier deliveries, use POST /v1/inventory-adjustments with reason: received.

Field definitions: [shared fields](InventoryReceiptResponse.md#inventoryreceiptresponsedata).

### InventoryReceiptResult.inventory_receipt.lines[]

Field definitions: [InventoryReceiptResponse.data.lines[]](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedatalines).

### InventoryReceiptResult.inventory_receipt.source_system

Declared alternatives: [InventoryCountResponse.data.observation_provenance.source_system](../models/InventoryCountResponse.md#inventorycountresponsedataobservation_provenancesource_system).

