[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_delivery_location_set_deactivated_merchantInput

The `delivery_location_set.deactivated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook25a1d8aaa819PayloadInput.md#incomingwebhook25a1d8aaa819payloadinputdata). |
| `event_type` | Required | string | Values: `"delivery_location_set.deactivated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_delivery_location_set_deactivated_merchantInput.data

Field definitions: [IncomingWebhook25a1d8aaa819PayloadInput.data](../models/IncomingWebhook25a1d8aaa819PayloadInput.md#incomingwebhook25a1d8aaa819payloadinputdata).

### Webhook_delivery_location_set_deactivated_merchantInput.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

