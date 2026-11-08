[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerTicket

One of the buyer's event tickets, with the admission code its QR code holds.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Optional | string | The 16-character Crockford base32 admission code to show as a QR code and print as XXXX-XXXX-XXXX-XXXX. A bearer secret. Absent when the ticket is voided, on orders whose buyer_email differs from the email Flint verified, and for sessions Flint didn't verify: merchant access links, customer sessions created with an API key, links emailed to another address, and checkout links a merchant reads or requests after payment. minLength: `16`. maxLength: `16`. |
| `attendee_name` | Required | string or null | Attendee name. Null when none was given. minLength: `1`. maxLength: `200`. |
| `checked_in_at` | Required | string or null | When the ticket was admitted. Null when the ticket is not checked in. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When the ticket was issued. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `event` | Optional | [BuyerTicketEvent](../models/BuyerTicketEvent.md#buyerticketevent) | The event details the order captured at checkout. Absent when the order didn't record them. Event details captured when the ticket's order was placed. |
| `order_id` | Required | string | The buyer's order that purchased this ticket. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `status` | Required | string | The admission lifecycle. Values: `"issued"`, `"checked_in"`, `"voided"`. |
| `ticket_id` | Required | string | Unique ticket identity with the tkt_ prefix. Example: `"tkt_01KEZF7C00AWVKS6GAX8RMEBZ8"`. |
| `ticket_number` | Required | string | The event prefix and sequence, such as GAL001. It doesn't admit anyone on its own. |

