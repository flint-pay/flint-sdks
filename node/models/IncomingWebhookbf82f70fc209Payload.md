[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookbf82f70fc209Payload

The `partner_app_install.permissions_updated` webhook payload for the `partner_app` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook275a5e442d58Payload.md#incomingwebhook275a5e442d58payloaddata). |
| `event_type` | Required | string | Values: `"partner_app_install.permissions_updated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook078273f39700Payload.md#incomingwebhook078273f39700payloadsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhookbf82f70fc209Payload.data

Field definitions: [IncomingWebhook275a5e442d58Payload.data](../models/IncomingWebhook275a5e442d58Payload.md#incomingwebhook275a5e442d58payloaddata).

### IncomingWebhookbf82f70fc209Payload.source

Declared alternatives: [IncomingWebhook078273f39700Payload.source](../models/IncomingWebhook078273f39700Payload.md#incomingwebhook078273f39700payloadsource).

