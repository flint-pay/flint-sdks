[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationTransitionRequestReleaseInput

The `release` variant of `InventoryReservationTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"release"`. |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. `lines[]`: [declared alternatives](../models/InventoryReservationTransitionRequestInput.md#inventoryreservationtransitionrequestinput-variant-3lines). |

### InventoryReservationTransitionRequestReleaseInput.lines[]

Declared alternatives: [InventoryReservationTransitionRequestInput variant 3.lines[]](../models/InventoryReservationTransitionRequestInput.md#inventoryreservationtransitionrequestinput-variant-3lines).

