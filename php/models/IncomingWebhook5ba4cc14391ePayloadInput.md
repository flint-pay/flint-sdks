[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook5ba4cc14391ePayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook05f1b45d6cf6PayloadInput.md#incomingwebhook05f1b45d6cf6payloadinputdata). |
| `event_type` | Required | string | Values: `"invoice_payment_attempt.canceled"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook5ba4cc14391ePayloadInput variant 1: `event_type` = `"invoice_payment_attempt.canceled"`

oneOf variant 1: The `invoice_payment_attempt.canceled` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"invoice_payment_attempt.canceled"`.

### IncomingWebhook5ba4cc14391ePayloadInput variant 2: `event_type` = `"invoice_payment_attempt.canceled"`

oneOf variant 2: The `invoice_payment_attempt.canceled` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"invoice_payment_attempt.canceled"`.

### IncomingWebhook5ba4cc14391ePayloadInput.data

Field definitions: [IncomingWebhook05f1b45d6cf6PayloadInput.data](../models/IncomingWebhook05f1b45d6cf6PayloadInput.md#incomingwebhook05f1b45d6cf6payloadinputdata).

### IncomingWebhook5ba4cc14391ePayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook5ba4cc14391ePayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

