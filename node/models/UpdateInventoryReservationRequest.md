[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryReservationRequest

The request body for: Update inventory reservation. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `expires_at` | Required | string | New hold deadline: after now and at most 24 hours from now. It can be earlier or later than the current deadline. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

