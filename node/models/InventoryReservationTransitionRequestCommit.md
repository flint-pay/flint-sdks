[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationTransitionRequestCommit

The `commit` variant of `InventoryReservationTransitionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"commit"`. |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest-variant-1lines). |

### InventoryReservationTransitionRequestCommit.lines[]

Field definitions: [InventoryReservationTransitionRequest variant 1.lines[]](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest-variant-1lines).

