[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketedEvent

Event details for a ticketed order: name, location, start time, time zone, and the tickets issued.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | string | Where the event takes place. |
| `name` | Required | string | Event name when the order was placed. |
| `starts_at` | Optional | string | When the event starts. RFC 3339 timestamp. Format: `date-time`. |
| `ticket_numbers` | Required | Array of string | Ticket numbers issued for this order. Empty while ticket_status is pending. |
| `ticket_status` | Required | string | Values: `"pending"`, `"issued"`, `"void"`. |
| `timezone` | Optional | string | IANA time zone Flint shows the event in. |

