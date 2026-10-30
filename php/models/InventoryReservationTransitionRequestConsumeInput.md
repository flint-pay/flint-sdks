[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationTransitionRequestConsumeInput

The `consume` variant of `InventoryReservationTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"consume"`. |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryReservationTransitionRequestInput.md#inventoryreservationtransitionrequestinput-variant-2lines). |
| `provenance` | Optional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the physical handoff happened. When omitted, occurred_at is the command receipt time and source_system is null. Where and when an inventory event happened: the source system, external actor, and time. |

### InventoryReservationTransitionRequestConsumeInput.lines[]

Field definitions: [InventoryReservationTransitionRequestInput variant 2.lines[]](../models/InventoryReservationTransitionRequestInput.md#inventoryreservationtransitionrequestinput-variant-2lines).

