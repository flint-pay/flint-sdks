[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_delivery_method_deactivated_installed_merchantsInput

The `delivery_method.deactivated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook33ee5571b4b4PayloadInput.md#incomingwebhook33ee5571b4b4payloadinputdata). |
| `event_type` | Required | string | Values: `"delivery_method.deactivated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_delivery_method_deactivated_installed_merchantsInput.data

Field definitions: [IncomingWebhook33ee5571b4b4PayloadInput.data](../models/IncomingWebhook33ee5571b4b4PayloadInput.md#incomingwebhook33ee5571b4b4payloadinputdata).

### Webhook_delivery_method_deactivated_installed_merchantsInput.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

