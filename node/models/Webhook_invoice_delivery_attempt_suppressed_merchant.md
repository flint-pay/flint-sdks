[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_invoice_delivery_attempt_suppressed_merchant

The `invoice_delivery_attempt.suppressed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhookab5114542a0ePayload.md#incomingwebhookab5114542a0epayloaddata). |
| `event_type` | Required | string | Values: `"invoice_delivery_attempt.suppressed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_invoice_delivery_attempt_suppressed_merchant.data

Field definitions: [IncomingWebhookab5114542a0ePayload.data](../models/IncomingWebhookab5114542a0ePayload.md#incomingwebhookab5114542a0epayloaddata).

### Webhook_invoice_delivery_attempt_suppressed_merchant.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

