[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_fulfillment_event_created_installed_merchantsInput

The `fulfillment_event.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook638a8c59872dPayloadInput.md#incomingwebhook638a8c59872dpayloadinputdata). |
| `event_type` | Required | string | Values: `"fulfillment_event.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_fulfillment_event_created_installed_merchantsInput.data

Field definitions: [IncomingWebhook638a8c59872dPayloadInput.data](../models/IncomingWebhook638a8c59872dPayloadInput.md#incomingwebhook638a8c59872dpayloadinputdata).

### Webhook_fulfillment_event_created_installed_merchantsInput.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

