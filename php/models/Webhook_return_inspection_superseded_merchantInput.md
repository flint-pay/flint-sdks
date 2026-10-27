[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_return_inspection_superseded_merchantInput

The `return_inspection.superseded` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook7adf7ff33e7aPayloadInput.md#incomingwebhook7adf7ff33e7apayloadinputdata). |
| `event_type` | Required | string | Values: `"return_inspection.superseded"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_return_inspection_superseded_merchantInput.data

Field definitions: [IncomingWebhook7adf7ff33e7aPayloadInput.data](../models/IncomingWebhook7adf7ff33e7aPayloadInput.md#incomingwebhook7adf7ff33e7apayloadinputdata).

### Webhook_return_inspection_superseded_merchantInput.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

