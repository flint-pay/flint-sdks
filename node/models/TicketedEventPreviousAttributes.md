[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TicketedEventPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Optional | string or null | Where the event takes place. `location`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributeslocation). |
| `name` | Optional | string or null | Event name when the order was placed. `name`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesname). |
| `starts_at` | Optional | string or null | When the event starts. RFC 3339 timestamp. `starts_at`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesstarts_at). |
| `ticket_numbers` | Optional | Array of string or null | Ticket numbers issued for this order. Empty while ticket_status is pending. `ticket_numbers`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesticket_numbers). |
| `ticket_status` | Optional | string or null | Whether the order's tickets are issued. Values: `"pending"`, `"issued"`, `"voided"`. `ticket_status`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesticket_status). |
| `timezone` | Optional | string or null | IANA time zone Flint shows the event in. `timezone`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributestimezone). |

### TicketedEventPreviousAttributes.location

### TicketedEventPreviousAttributes.location variant 1

anyOf variant 1: Where the event takes place..

- Value shape: string. Where the event takes place. 

### TicketedEventPreviousAttributes.location variant 2

anyOf variant 2.

- Value shape: null. Where the event takes place. 

### TicketedEventPreviousAttributes.name

### TicketedEventPreviousAttributes.name variant 1

anyOf variant 1: Event name when the order was placed..

- Value shape: string. Event name when the order was placed. 

### TicketedEventPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Event name when the order was placed. 

### TicketedEventPreviousAttributes.starts_at

### TicketedEventPreviousAttributes.starts_at variant 1

anyOf variant 1: When the event starts. RFC 3339 timestamp..

- Value shape: string. When the event starts. RFC 3339 timestamp. When the event starts. RFC 3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### TicketedEventPreviousAttributes.starts_at variant 2

anyOf variant 2.

- Value shape: null. When the event starts. RFC 3339 timestamp. 

### TicketedEventPreviousAttributes.ticket_numbers

### TicketedEventPreviousAttributes.ticket_numbers variant 1

anyOf variant 1: Ticket numbers issued for this order. Empty while ticket_status is pending..

- Value shape: Array of string. Ticket numbers issued for this order. Empty while ticket_status is pending. 

### TicketedEventPreviousAttributes.ticket_numbers variant 2

anyOf variant 2.

- Value shape: null. Ticket numbers issued for this order. Empty while ticket_status is pending. 

### TicketedEventPreviousAttributes.ticket_status

### TicketedEventPreviousAttributes.ticket_status variant 1

anyOf variant 1: Whether the order's tickets are issued..

- Value shape: string. Whether the order's tickets are issued. Values: `"pending"`, `"issued"`, `"voided"`.

### TicketedEventPreviousAttributes.ticket_status variant 2

anyOf variant 2.

- Value shape: null. Whether the order's tickets are issued. 

### TicketedEventPreviousAttributes.timezone

### TicketedEventPreviousAttributes.timezone variant 1

anyOf variant 1: IANA time zone Flint shows the event in..

- Value shape: string. IANA time zone Flint shows the event in. 

### TicketedEventPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA time zone Flint shows the event in. 

