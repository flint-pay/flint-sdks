[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook45be12e0c91dPayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook45be12e0c91dPayloadInput.md#incomingwebhook45be12e0c91dpayloadinputdata). |
| `event_type` | Required | string | Values: `"gift_card_notification.updated"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook45be12e0c91dPayloadInput variant 1: `event_type` = `"gift_card_notification.updated"`

oneOf variant 1: The `gift_card_notification.updated` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"gift_card_notification.updated"`.

### IncomingWebhook45be12e0c91dPayloadInput variant 2: `event_type` = `"gift_card_notification.updated"`

oneOf variant 2: The `gift_card_notification.updated` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"gift_card_notification.updated"`.

### IncomingWebhook45be12e0c91dPayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardNotificationInput](../models/GiftCardNotificationInput.md#giftcardnotificationinput) | A message sent to a gift card recipient. `object`: [field definitions](../models/IncomingWebhook45be12e0c91dPayloadInput.md#incomingwebhook45be12e0c91dpayloadinputdataobject). |

### IncomingWebhook45be12e0c91dPayloadInput.data.object

A message sent to a gift card recipient.

Field definitions: [shared fields](GiftCardNotificationInput.md#giftcardnotificationinput).

### IncomingWebhook45be12e0c91dPayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook45be12e0c91dPayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

