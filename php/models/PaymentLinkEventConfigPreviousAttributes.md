[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkEventConfigPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collect_attendee_names` | Optional | boolean or null | Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. `collect_attendee_names`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributescollect_attendee_names). |
| `event_at` | Optional | string or null | RFC3339 timestamp. `event_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `max_total_quantity` | Optional | integer or null | Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. `max_total_quantity`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributesmax_total_quantity). |
| `send_ticket_emails` | Optional | boolean or null | Whether Flint emails tickets to buyers after they pay. `send_ticket_emails`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributessend_ticket_emails). |
| `ticket_prefix` | Optional | string or null | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. `ticket_prefix`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributesticket_prefix). |
| `timezone` | Optional | string or null | IANA time zone of the event venue, used to show `event_at` as venue time. `timezone`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributestimezone). |
| `venue` | Optional | string or null | Where the event takes place. `venue`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributes.md#paymentlinkeventconfigpreviousattributesvenue). |

### PaymentLinkEventConfigPreviousAttributes.collect_attendee_names

### PaymentLinkEventConfigPreviousAttributes.collect_attendee_names variant 1

anyOf variant 1: Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false..

- Value shape: boolean. Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. 

### PaymentLinkEventConfigPreviousAttributes.collect_attendee_names variant 2

anyOf variant 2.

- Value shape: null. Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. 

### PaymentLinkEventConfigPreviousAttributes.event_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentLinkEventConfigPreviousAttributes.max_total_quantity

### PaymentLinkEventConfigPreviousAttributes.max_total_quantity variant 1

anyOf variant 1: Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format: `int32`. 

### PaymentLinkEventConfigPreviousAttributes.max_total_quantity variant 2

anyOf variant 2.

- Value shape: null. Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. 

### PaymentLinkEventConfigPreviousAttributes.send_ticket_emails

### PaymentLinkEventConfigPreviousAttributes.send_ticket_emails variant 1

anyOf variant 1: Whether Flint emails tickets to buyers after they pay..

- Value shape: boolean. Whether Flint emails tickets to buyers after they pay. 

### PaymentLinkEventConfigPreviousAttributes.send_ticket_emails variant 2

anyOf variant 2.

- Value shape: null. Whether Flint emails tickets to buyers after they pay. 

### PaymentLinkEventConfigPreviousAttributes.ticket_prefix

### PaymentLinkEventConfigPreviousAttributes.ticket_prefix variant 1

anyOf variant 1: Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets..

- Value shape: string. Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. maxLength: `5`. 

### PaymentLinkEventConfigPreviousAttributes.ticket_prefix variant 2

anyOf variant 2.

- Value shape: null. Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. 

### PaymentLinkEventConfigPreviousAttributes.timezone

### PaymentLinkEventConfigPreviousAttributes.timezone variant 1

anyOf variant 1: IANA time zone of the event venue, used to show `event_at` as venue time..

- Value shape: string. IANA time zone of the event venue, used to show `event_at` as venue time. 

### PaymentLinkEventConfigPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA time zone of the event venue, used to show `event_at` as venue time. 

### PaymentLinkEventConfigPreviousAttributes.venue

### PaymentLinkEventConfigPreviousAttributes.venue variant 1

anyOf variant 1: Where the event takes place..

- Value shape: string. Where the event takes place. Where the event takes place. maxLength: `500`. 

### PaymentLinkEventConfigPreviousAttributes.venue variant 2

anyOf variant 2.

- Value shape: null. Where the event takes place. 

