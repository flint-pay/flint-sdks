[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationTransitionRequestCommitInput

The `commit` variant of `InventoryReservationTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"commit"`. |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryReservationTransitionRequestInput.md#inventoryreservationtransitionrequestinput-variant-1lines). |

### InventoryReservationTransitionRequestCommitInput.lines[]

Field definitions: [InventoryReservationTransitionRequestInput variant 1.lines[]](../models/InventoryReservationTransitionRequestInput.md#inventoryreservationtransitionrequestinput-variant-1lines).

