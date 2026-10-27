[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReceiptResultInput

Inventory receipt and the levels it changed. inventory_receipt is the primary resource and expected_version target.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_levels` | Required | Array of [InventoryLevelInput](../models/InventoryLevelInput.md#inventorylevelinput) | Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. |
| `inventory_receipt` | Required | [InventoryReceiptInput](../models/InventoryReceiptInput.md#inventoryreceiptinput) | Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them. |

