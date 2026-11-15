[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateTicketRequest

The attendee name to set or clear. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attendee_name` | Required | string or null | The attendee name, 1 to 200 characters after surrounding whitespace is trimmed. Send null to clear it. minLength: `1`. maxLength: `200`. |
| `expected_version` | Optional | integer | The ticket version last read. The change applies only while the ticket is at this version; a stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse the change. Door scanners usually omit it. Format: `uint64`. minimum: `1`. |

