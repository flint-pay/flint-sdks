[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Ticket

An individual admission, a top-level child of an order. Merchant reads and webhooks never include the bearer admission code.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Optional | string | The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: `16`. |
| `admission_code_last4` | Required | string | Last four characters of the current admission code. |
| `attendee_name` | Required | string or null | Optional attendee name. Null when not supplied. minLength: `1`. maxLength: `200`. |
| `check_in_method` | Required | string or null | How the ticket was admitted. Null when the ticket is not checked in. Values: `"admission_code"`, `"manual"`. `check_in_method`: [declared alternatives](../models/TicketResponse.md#ticketresponsedatacheck_in_method). |
| `checked_in_at` | Required | string or null | When the ticket was admitted. Null when the ticket is not checked in. Format: `date-time`. |
| `created_at` | Required | string | When the ticket was issued. Format: `date-time`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) | Order summary, present only with expand=order. Requires commerce.orders.read. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. `order`: [field definitions](../models/TicketResponse.md#ticketresponsedataorder). |
| `order_id` | Required | string | The order that purchased this ticket. |
| `order_line_item_id` | Required | string | The purchased ticket tier. |
| `payment_link_id` | Required | string | The event payment link. |
| `status` | Required | string | The admission lifecycle. Values: `"issued"`, `"checked_in"`, `"voided"`. |
| `supported_actions` | Required | Array of string | Actions currently offered for this ticket. Items values: `"check_in"`, `"undo_check_in"`, `"void"`. |
| `ticket_id` | Required | string | Unique ticket identity with the tkt_ prefix. |
| `ticket_number` | Required | string | The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. |
| `updated_at` | Required | string | When the ticket last changed. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |
| `voided_at` | Required | string or null | When the ticket was permanently voided. Null when the ticket has not been voided. Format: `date-time`. |

### Ticket.check_in_method

Declared alternatives: [TicketResponse.data.check_in_method](../models/TicketResponse.md#ticketresponsedatacheck_in_method).

### Ticket.order

Field definitions: [TicketResponse.data.order](../models/TicketResponse.md#ticketresponsedataorder).

