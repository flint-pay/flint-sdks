[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook21c7fdae52f1PayloadInput

The `environment_grant.revoked` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook078273f39700PayloadInput.md#incomingwebhook078273f39700payloadinputdata). |
| `event_type` | Required | string | Values: `"environment_grant.revoked"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook078273f39700PayloadInput.md#incomingwebhook078273f39700payloadinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook21c7fdae52f1PayloadInput.data

Field definitions: [IncomingWebhook078273f39700PayloadInput.data](../models/IncomingWebhook078273f39700PayloadInput.md#incomingwebhook078273f39700payloadinputdata).

### IncomingWebhook21c7fdae52f1PayloadInput.source

Declared alternatives: [IncomingWebhook078273f39700PayloadInput.source](../models/IncomingWebhook078273f39700PayloadInput.md#incomingwebhook078273f39700payloadinputsource).

