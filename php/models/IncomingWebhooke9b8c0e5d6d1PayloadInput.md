[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhooke9b8c0e5d6d1PayloadInput

The `partner_app_install.updated` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook275a5e442d58PayloadInput.md#incomingwebhook275a5e442d58payloadinputdata). |
| `event_type` | Required | string | Values: `"partner_app_install.updated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook078273f39700PayloadInput.md#incomingwebhook078273f39700payloadinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhooke9b8c0e5d6d1PayloadInput.data

Field definitions: [IncomingWebhook275a5e442d58PayloadInput.data](../models/IncomingWebhook275a5e442d58PayloadInput.md#incomingwebhook275a5e442d58payloadinputdata).

### IncomingWebhooke9b8c0e5d6d1PayloadInput.source

Declared alternatives: [IncomingWebhook078273f39700PayloadInput.source](../models/IncomingWebhook078273f39700PayloadInput.md#incomingwebhook078273f39700payloadinputsource).

