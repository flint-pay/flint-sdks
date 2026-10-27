[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_inventory_reservation_committed_merchant

The `inventory_reservation.committed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook0452cf0e91f7Payload.md#incomingwebhook0452cf0e91f7payloaddata). |
| `event_type` | Required | string | Values: `"inventory_reservation.committed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_inventory_reservation_committed_merchant.data

Field definitions: [IncomingWebhook0452cf0e91f7Payload.data](../models/IncomingWebhook0452cf0e91f7Payload.md#incomingwebhook0452cf0e91f7payloaddata).

### Webhook_inventory_reservation_committed_merchant.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

