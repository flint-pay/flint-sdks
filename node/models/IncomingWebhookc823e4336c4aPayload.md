[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookc823e4336c4aPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook0caa82ed1aafPayload.md#incomingwebhook0caa82ed1aafpayloaddata). |
| `event_type` | Required | string | Values: `"delivery_rate_callback.archived"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhookc823e4336c4aPayload variant 1: `event_type` = `"delivery_rate_callback.archived"`

oneOf variant 1: The `delivery_rate_callback.archived` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"delivery_rate_callback.archived"`.

### IncomingWebhookc823e4336c4aPayload variant 2: `event_type` = `"delivery_rate_callback.archived"`

oneOf variant 2: The `delivery_rate_callback.archived` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"delivery_rate_callback.archived"`.

### IncomingWebhookc823e4336c4aPayload.data

Field definitions: [IncomingWebhook0caa82ed1aafPayload.data](../models/IncomingWebhook0caa82ed1aafPayload.md#incomingwebhook0caa82ed1aafpayloaddata).

### IncomingWebhookc823e4336c4aPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhookc823e4336c4aPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

