[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook2c03ad91f156Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook28c5dc1777e5Payload.md#incomingwebhook28c5dc1777e5payloaddata). |
| `event_type` | Required | string | Values: `"delivery_zone.deactivated"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook2c03ad91f156Payload variant 1: `event_type` = `"delivery_zone.deactivated"`

oneOf variant 1: The `delivery_zone.deactivated` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"delivery_zone.deactivated"`.

### IncomingWebhook2c03ad91f156Payload variant 2: `event_type` = `"delivery_zone.deactivated"`

oneOf variant 2: The `delivery_zone.deactivated` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"delivery_zone.deactivated"`.

### IncomingWebhook2c03ad91f156Payload.data

Field definitions: [IncomingWebhook28c5dc1777e5Payload.data](../models/IncomingWebhook28c5dc1777e5Payload.md#incomingwebhook28c5dc1777e5payloaddata).

### IncomingWebhook2c03ad91f156Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook2c03ad91f156Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

