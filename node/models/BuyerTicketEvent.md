[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerTicketEvent

Event details captured when the ticket's order was placed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | string | Where the event takes place. |
| `name` | Required | string | Event name when the order was placed. |
| `starts_at` | Optional | string | When the event starts. RFC 3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `timezone` | Optional | string | IANA time zone Flint shows the event in. |

