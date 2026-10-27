[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook527f9bd2c39dPayload

The `payout_destination.disabled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook44e6923a1369Payload.md#incomingwebhook44e6923a1369payloaddata). |
| `event_type` | Required | string | Values: `"payout_destination.disabled"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook527f9bd2c39dPayload.data

Field definitions: [IncomingWebhook44e6923a1369Payload.data](../models/IncomingWebhook44e6923a1369Payload.md#incomingwebhook44e6923a1369payloaddata).

### IncomingWebhook527f9bd2c39dPayload.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

