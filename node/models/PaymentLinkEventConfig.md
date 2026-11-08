[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkEventConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collect_attendee_names` | Optional | boolean | Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. |
| `event_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `max_total_quantity` | Optional | integer or null | Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `send_ticket_emails` | Optional | boolean | Whether Flint emails tickets to buyers after they pay. |
| `ticket_prefix` | Optional | string | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. |
| `timezone` | Optional | string | IANA time zone of the event venue, used to show `event_at` as venue time. |
| `venue` | Optional | string | Where the event takes place. |

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

