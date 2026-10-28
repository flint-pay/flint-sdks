[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook019a504a3353PayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinputdata). |
| `event_type` | Required | string | Values: `"payment_review.reopened"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook019a504a3353PayloadInput variant 1: `event_type` = `"payment_review.reopened"`

oneOf variant 1: The `payment_review.reopened` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"payment_review.reopened"`.

### IncomingWebhook019a504a3353PayloadInput variant 2: `event_type` = `"payment_review.reopened"`

oneOf variant 2: The `payment_review.reopened` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"payment_review.reopened"`.

### IncomingWebhook019a504a3353PayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PaymentReviewInput](../models/PaymentReviewInput.md#paymentreviewinput) | A payment review requiring a merchant decision. `object`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinputdataobject). |

### IncomingWebhook019a504a3353PayloadInput.data.object

A payment review requiring a merchant decision.

Field definitions: [shared fields](PaymentReviewInput.md#paymentreviewinput).

### IncomingWebhook019a504a3353PayloadInput variant 1.request

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | string |  |
| `idempotency_key` | Optional | string | The Idempotency-Key the originating request sent. Absent when it sent none. |

### IncomingWebhook019a504a3353PayloadInput variant 2.source

The source of a partner webhook event, selected by type.

Field definitions: [shared fields](WebhookEventSourceInstalledMerchants.md#webhookeventsourceinstalledmerchants).

### IncomingWebhook019a504a3353PayloadInput variant 2.source variant 1: `type` = `"installed_merchants"`

oneOf variant 2: The installed_merchants source of a partner webhook event..

No additional constraints.

