[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookc80b5d8589f2PayloadInput

The `dispute.inquiry_closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook04494e8bd1b3PayloadInput.md#incomingwebhook04494e8bd1b3payloadinputdata). |
| `event_type` | Required | string | Values: `"dispute.inquiry_closed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhookc80b5d8589f2PayloadInput.data

Field definitions: [IncomingWebhook04494e8bd1b3PayloadInput.data](../models/IncomingWebhook04494e8bd1b3PayloadInput.md#incomingwebhook04494e8bd1b3payloadinputdata).

### IncomingWebhookc80b5d8589f2PayloadInput.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

