[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_delivery_method_activated_installed_merchants

The `delivery_method.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook33ee5571b4b4Payload.md#incomingwebhook33ee5571b4b4payloaddata). |
| `event_type` | Required | string | Values: `"delivery_method.activated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_delivery_method_activated_installed_merchants.data

Field definitions: [IncomingWebhook33ee5571b4b4Payload.data](../models/IncomingWebhook33ee5571b4b4Payload.md#incomingwebhook33ee5571b4b4payloaddata).

### Webhook_delivery_method_activated_installed_merchants.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

