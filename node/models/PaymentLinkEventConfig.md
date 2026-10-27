[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkEventConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `max_total_quantity` | Optional | integer or null | Most tickets the event sells across all orders. Absent means no limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `send_ticket_emails` | Optional | boolean |  |
| `ticket_prefix` | Optional | string | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. |
| `timezone` | Optional | string |  |
| `venue` | Optional | string |  |

### PaymentLinkEventConfig variant 1

anyOf variant 1: Declared schema PaymentLinkEventConfig. Event settings on an event payment link, such as its date, venue, ticket limit, and ticket emails..

- Constraints for `ticket_prefix`: maxLength: `5`.
- Constraints for `venue`: maxLength: `500`.

### PaymentLinkEventConfig variant 2

anyOf variant 2: Declared schema PaymentLinkEventConfigRequest. Event settings you supply when creating an event payment link..

- Constraints for `event_at`: minLength: `1`.
- Constraints for `ticket_prefix`: minLength: `1`. maxLength: `5`.
- Constraints for `timezone`: minLength: `1`.
- Constraints for `venue`: minLength: `1`. maxLength: `500`.

