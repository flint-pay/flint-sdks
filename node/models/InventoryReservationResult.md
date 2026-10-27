[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationResult

inventory_reservation is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_levels` | Required | Array of [InventoryLevel](../models/InventoryLevel.md#inventorylevel) | Post-commit state of every level this command touched, so no follow-up read is needed. A replay returns the levels the original command produced. |
| `inventory_reservation` | Required | [InventoryReservation](../models/InventoryReservation.md#inventoryreservation) | A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated. |

