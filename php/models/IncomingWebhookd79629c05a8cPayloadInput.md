[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookd79629c05a8cPayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhookb8e1ba81d204PayloadInput.md#incomingwebhookb8e1ba81d204payloadinputdata). |
| `event_type` | Required | string | Values: `"modifier_set.updated"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhookd79629c05a8cPayloadInput variant 1: `event_type` = `"modifier_set.updated"`

oneOf variant 1: The `modifier_set.updated` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"modifier_set.updated"`.

### IncomingWebhookd79629c05a8cPayloadInput variant 2: `event_type` = `"modifier_set.updated"`

oneOf variant 2: The `modifier_set.updated` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"modifier_set.updated"`.

### IncomingWebhookd79629c05a8cPayloadInput.data

Field definitions: [IncomingWebhookb8e1ba81d204PayloadInput.data](../models/IncomingWebhookb8e1ba81d204PayloadInput.md#incomingwebhookb8e1ba81d204payloadinputdata).

### IncomingWebhookd79629c05a8cPayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhookd79629c05a8cPayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

