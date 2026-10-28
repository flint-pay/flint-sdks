[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationTransitionRequestInput

The request body for: Transition inventory reservation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string |  |
| `expected_version` | Optional | integer string | Optional resource version the caller last read. Enforced when sent. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Varies by condition | minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/InventoryReservationTransitionRequestInput.md#inventoryreservationtransitionrequestinput-variant-1lines), [field definitions](../models/InventoryReservationTransitionRequestInput.md#inventoryreservationtransitionrequestinput-variant-2lines), [declared alternatives](../models/InventoryReservationTransitionRequestInput.md#inventoryreservationtransitionrequestinput-variant-3lines). |
| `provenance` | Conditional | [InventoryProvenanceRequestInput](../models/InventoryProvenanceRequestInput.md#inventoryprovenancerequestinput) | When and where the physical handoff happened. When omitted, occurred_at is the command receipt time and source_system is null. Where and when an inventory event happened: the source system, external actor, and time. |

### InventoryReservationTransitionRequestInput variant 1: `action` = `"commit"`

oneOf variant 1: The `commit` variant of `InventoryReservationTransitionRequest`..

- Undeclared: `provenance`.
- Constraints for `action`: Values: `"commit"`.
- Constraints for `lines`: Array of object.

### InventoryReservationTransitionRequestInput variant 2: `action` = `"consume"`

oneOf variant 2: The `consume` variant of `InventoryReservationTransitionRequest`..

- Optional: `provenance`.
- Constraints for `action`: Values: `"consume"`.
- Constraints for `lines`: Array of object.

### InventoryReservationTransitionRequestInput variant 3: `action` = `"release"`

oneOf variant 3: The `release` variant of `InventoryReservationTransitionRequest`..

- Undeclared: `provenance`.
- Constraints for `action`: Values: `"release"`.
- Constraints for `lines`: Array of (object and Alternative shapes (see declared variants)).

### InventoryReservationTransitionRequestInput variant 1.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_id` | Required | string | Line being transitioned. minLength: `1`. |
| `target_committed_quantity` | Required | integer string | Cumulative whole-number quantity that should have reached this target. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### InventoryReservationTransitionRequestInput variant 2.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_id` | Required | string | Line being transitioned. minLength: `1`. |
| `target_consumed_quantity` | Required | integer string | Cumulative whole-number quantity that should have reached this target. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### InventoryReservationTransitionRequestInput variant 3.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_id` | Required | string | Line being transitioned. minLength: `1`. |
| `target_released_from_committed_quantity` | Conditional | integer string | Cumulative whole-number quantity that should have reached this target. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `target_released_from_held_quantity` | Conditional | integer string | Cumulative whole-number quantity that should have reached this target. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### InventoryReservationTransitionRequestInput variant 3.lines[] variant 1

anyOf variant 1.

- Required: `target_released_from_held_quantity`.
- Optional: `target_released_from_committed_quantity`.

### InventoryReservationTransitionRequestInput variant 3.lines[] variant 2

anyOf variant 2.

- Required: `target_released_from_committed_quantity`.
- Optional: `target_released_from_held_quantity`.

