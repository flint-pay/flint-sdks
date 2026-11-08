[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CommitInventoryReservationRequestInput

Commits held quantity, usually once the buyer pays. Commit before expires_at: after the deadline, commit returns 409 ACTION_NOT_ALLOWED with reason terminal_status.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |
| `lines` | Required | Array of object | Reservation lines this action changes, each with a cumulative target. 1 to 100 lines. minItems: `1`. maxItems: `100`. `lines[]`: [field definitions](../models/CommitInventoryReservationRequestInput.md#commitinventoryreservationrequestinputlines). |

### CommitInventoryReservationRequestInput.lines[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_id` | Required | string | Reservation line this action changes. minLength: `1`. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. |
| `target_committed_quantity` | Required | integer | Cumulative whole-number quantity that should have reached this target. Format: `int64`. minimum: `0`. |

