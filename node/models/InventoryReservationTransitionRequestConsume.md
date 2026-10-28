[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationTransitionRequestConsume

The `consume` variant of `InventoryReservationTransitionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"consume"`. |
| `expected_version` | Optional | integer string | Optional resource version the caller last read. Enforced when sent. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest-variant-2lines). |
| `provenance` | Optional | [InventoryProvenanceRequest](../models/InventoryProvenanceRequest.md#inventoryprovenancerequest) | When and where the physical handoff happened. When omitted, occurred_at is the command receipt time and source_system is null. Where and when an inventory event happened: the source system, external actor, and time. |

### InventoryReservationTransitionRequestConsume.lines[]

Field definitions: [InventoryReservationTransitionRequest variant 2.lines[]](../models/InventoryReservationTransitionRequest.md#inventoryreservationtransitionrequest-variant-2lines).

