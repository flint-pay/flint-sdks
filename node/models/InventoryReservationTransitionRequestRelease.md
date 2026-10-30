[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationTransitionRequestRelease

The `release` variant of `InventoryReservationTransitionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"release"`. |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. `lines[]`: [declared alternatives](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest-variant-3lines). |

### InventoryReservationTransitionRequestRelease.lines[]

Declared alternatives: [InventoryReservationTransitionRequest variant 3.lines[]](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest-variant-3lines).

