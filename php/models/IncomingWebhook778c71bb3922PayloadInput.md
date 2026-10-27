[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook778c71bb3922PayloadInput

The `merchant_billing_invoice.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook1e0bfe58cccePayloadInput.md#incomingwebhook1e0bfe58cccepayloadinputdata). |
| `event_type` | Required | string | Values: `"merchant_billing_invoice.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook778c71bb3922PayloadInput.data

Field definitions: [IncomingWebhook1e0bfe58cccePayloadInput.data](../models/IncomingWebhook1e0bfe58cccePayloadInput.md#incomingwebhook1e0bfe58cccepayloadinputdata).

### IncomingWebhook778c71bb3922PayloadInput.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

