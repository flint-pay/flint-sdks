[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptResult

Inventory receipt and the levels it changed. inventory_receipt is the primary resource and expected_version target.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. |
| `inventory_receipt` | Required | [InventoryReceipt](../models/InventoryReceipt.md#inventoryreceipt) | Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. `inventory_receipt`: [field definitions](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedata). |

### InventoryReceiptResult.inventory_receipt

Field definitions: [InventoryReceiptResponse.data](../models/InventoryReceiptResponse.md#inventoryreceiptresponsedata).

