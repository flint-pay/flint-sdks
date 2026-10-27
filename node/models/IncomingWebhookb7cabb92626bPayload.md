[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookb7cabb92626bPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook0480be55a902Payload.md#incomingwebhook0480be55a902payloaddata). |
| `event_type` | Required | string | Values: `"payment_intent.expired"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhookb7cabb92626bPayload variant 1: `event_type` = `"payment_intent.expired"`

oneOf variant 1: The `payment_intent.expired` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"payment_intent.expired"`.

### IncomingWebhookb7cabb92626bPayload variant 2: `event_type` = `"payment_intent.expired"`

oneOf variant 2: The `payment_intent.expired` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"payment_intent.expired"`.

### IncomingWebhookb7cabb92626bPayload.data

Field definitions: [IncomingWebhook0480be55a902Payload.data](../models/IncomingWebhook0480be55a902Payload.md#incomingwebhook0480be55a902payloaddata).

### IncomingWebhookb7cabb92626bPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhookb7cabb92626bPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

