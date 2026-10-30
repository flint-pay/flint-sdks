[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateInventoryReservationRequestInput

The request body for: Update inventory reservation.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `expires_at` | Required | string | New hold deadline: after now and at most 24 hours from now. It can be earlier or later than the current deadline. Format: `date-time`. minLength: `1`. |

