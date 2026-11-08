[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReleaseInventoryReservationRequestInput

Releases held or committed quantity back to available stock, for example when the buyer leaves or you cancel after payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of (object and Alternative shapes (see declared variants)) | Reservation lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. `lines[]`: [declared alternatives](../models/ReleaseInventoryReservationRequestInput.md#releaseinventoryreservationrequestinputlines). |

### ReleaseInventoryReservationRequestInput.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_id` | Required | string | Reservation line this action changes. minLength: `1`. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. |
| `target_released_from_committed_quantity` | Conditional | integer | Cumulative whole-number quantity that should have reached this target. Format: `int64`. minimum: `0`. |
| `target_released_from_held_quantity` | Conditional | integer | Cumulative whole-number quantity that should have reached this target. Format: `int64`. minimum: `0`. |

### ReleaseInventoryReservationRequestInput.lines[] variant 1

anyOf variant 1.

- Required: `target_released_from_held_quantity`.
- Optional: `target_released_from_committed_quantity`.

### ReleaseInventoryReservationRequestInput.lines[] variant 2

anyOf variant 2.

- Required: `target_released_from_committed_quantity`.
- Optional: `target_released_from_held_quantity`.

