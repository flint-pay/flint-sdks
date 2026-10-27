[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_subscription_delivery_migration_completed_installed_merchantsInput

The `subscription_delivery_migration.completed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook362af2129f9dPayloadInput.md#incomingwebhook362af2129f9dpayloadinputdata). |
| `event_type` | Required | string | Values: `"subscription_delivery_migration.completed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_subscription_delivery_migration_completed_installed_merchantsInput.data

Field definitions: [IncomingWebhook362af2129f9dPayloadInput.data](../models/IncomingWebhook362af2129f9dPayloadInput.md#incomingwebhook362af2129f9dpayloadinputdata).

### Webhook_subscription_delivery_migration_completed_installed_merchantsInput.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

