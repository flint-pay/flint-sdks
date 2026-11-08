[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkEventConfigPatchRequestInput

Changes to an event payment link's settings. Send null on a nullable field to clear it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collect_attendee_names` | Optional | boolean | Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. |
| `event_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `max_total_quantity` | Optional | integer or null | Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `send_ticket_emails` | Optional | boolean | Whether Flint emails tickets to buyers after they pay. |
| `ticket_prefix` | Optional | string or null | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. Send null to clear it. minLength: `1`. maxLength: `5`. |
| `timezone` | Optional | string | IANA time zone of the event venue, used to show `event_at` as venue time. minLength: `1`. |
| `venue` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `500`. |

