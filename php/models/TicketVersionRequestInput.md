[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketVersionRequestInput

An optional version fence for the ticket.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | The ticket version last read. The change applies only while the ticket is at this version; a stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse the change. Door scanners usually omit it. Format: `uint64`. minimum: `1`. |

