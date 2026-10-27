[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkEventConfigRequestInput

Request input. Response: [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig).

Event settings you supply when creating an event payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `max_total_quantity` | Optional | integer or null | Most tickets the event sells across all orders. Absent means no limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `send_ticket_emails` | Optional | boolean |  |
| `ticket_prefix` | Optional | string | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. minLength: `1`. maxLength: `5`. |
| `timezone` | Optional | string | minLength: `1`. |
| `venue` | Optional | string | minLength: `1`. maxLength: `500`. |

