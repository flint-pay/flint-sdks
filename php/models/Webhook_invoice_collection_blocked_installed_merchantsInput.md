[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_invoice_collection_blocked_installed_merchantsInput

The `invoice.collection_blocked` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook155e0b06aa8fPayloadInput.md#incomingwebhook155e0b06aa8fpayloadinputdata). |
| `event_type` | Required | string | Values: `"invoice.collection_blocked"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_invoice_collection_blocked_installed_merchantsInput.data

Field definitions: [IncomingWebhook155e0b06aa8fPayloadInput.data](../models/IncomingWebhook155e0b06aa8fPayloadInput.md#incomingwebhook155e0b06aa8fpayloadinputdata).

### Webhook_invoice_collection_blocked_installed_merchantsInput.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

