[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkEventConfigPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collect_attendee_names` | Optional | boolean or null | Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. `collect_attendee_names`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributesInput.md#paymentlinkeventconfigpreviousattributesinputcollect_attendee_names). |
| `event_at` | Optional | string or null | RFC3339 timestamp. `event_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `max_total_quantity` | Optional | integer or null | Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. `max_total_quantity`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributesInput.md#paymentlinkeventconfigpreviousattributesinputmax_total_quantity). |
| `send_ticket_emails` | Optional | boolean or null | Whether Flint emails tickets to buyers after they pay. `send_ticket_emails`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributesInput.md#paymentlinkeventconfigpreviousattributesinputsend_ticket_emails). |
| `ticket_prefix` | Optional | string or null | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. `ticket_prefix`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributesInput.md#paymentlinkeventconfigpreviousattributesinputticket_prefix). |
| `timezone` | Optional | string or null | IANA time zone of the event venue, used to show `event_at` as venue time. `timezone`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributesInput.md#paymentlinkeventconfigpreviousattributesinputtimezone). |
| `venue` | Optional | string or null | Where the event takes place. `venue`: [declared alternatives](../models/PaymentLinkEventConfigPreviousAttributesInput.md#paymentlinkeventconfigpreviousattributesinputvenue). |

### PaymentLinkEventConfigPreviousAttributesInput.collect_attendee_names

### PaymentLinkEventConfigPreviousAttributesInput.collect_attendee_names variant 1

anyOf variant 1: Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false..

- Value shape: boolean. Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. 

### PaymentLinkEventConfigPreviousAttributesInput.collect_attendee_names variant 2

anyOf variant 2.

- Value shape: null. Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. 

### PaymentLinkEventConfigPreviousAttributesInput.event_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentLinkEventConfigPreviousAttributesInput.max_total_quantity

### PaymentLinkEventConfigPreviousAttributesInput.max_total_quantity variant 1

anyOf variant 1: Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format: `int32`. 

### PaymentLinkEventConfigPreviousAttributesInput.max_total_quantity variant 2

anyOf variant 2.

- Value shape: null. Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. 

### PaymentLinkEventConfigPreviousAttributesInput.send_ticket_emails

### PaymentLinkEventConfigPreviousAttributesInput.send_ticket_emails variant 1

anyOf variant 1: Whether Flint emails tickets to buyers after they pay..

- Value shape: boolean. Whether Flint emails tickets to buyers after they pay. 

### PaymentLinkEventConfigPreviousAttributesInput.send_ticket_emails variant 2

anyOf variant 2.

- Value shape: null. Whether Flint emails tickets to buyers after they pay. 

### PaymentLinkEventConfigPreviousAttributesInput.ticket_prefix

### PaymentLinkEventConfigPreviousAttributesInput.ticket_prefix variant 1

anyOf variant 1: Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets..

- Value shape: string. Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. maxLength: `5`. 

### PaymentLinkEventConfigPreviousAttributesInput.ticket_prefix variant 2

anyOf variant 2.

- Value shape: null. Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. 

### PaymentLinkEventConfigPreviousAttributesInput.timezone

### PaymentLinkEventConfigPreviousAttributesInput.timezone variant 1

anyOf variant 1: IANA time zone of the event venue, used to show `event_at` as venue time..

- Value shape: string. IANA time zone of the event venue, used to show `event_at` as venue time. 

### PaymentLinkEventConfigPreviousAttributesInput.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA time zone of the event venue, used to show `event_at` as venue time. 

### PaymentLinkEventConfigPreviousAttributesInput.venue

### PaymentLinkEventConfigPreviousAttributesInput.venue variant 1

anyOf variant 1: Where the event takes place..

- Value shape: string. Where the event takes place. Where the event takes place. maxLength: `500`. 

### PaymentLinkEventConfigPreviousAttributesInput.venue variant 2

anyOf variant 2.

- Value shape: null. Where the event takes place. 

