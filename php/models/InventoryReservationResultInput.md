[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationResultInput

inventory_reservation is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_levels` | Required | Array of [InventoryLevelInput](../models/InventoryLevelInput.md#inventorylevelinput) | Post-commit state of every level this command touched, so no follow-up read is needed. A replay returns the levels the original command produced. |
| `inventory_reservation` | Required | [InventoryReservationInput](../models/InventoryReservationInput.md#inventoryreservationinput) | A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated. |

