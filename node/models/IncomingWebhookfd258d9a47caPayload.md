[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookfd258d9a47caPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhookfd258d9a47caPayload.md#incomingwebhookfd258d9a47capayloaddata). |
| `event_type` | Required | string | Values: `"delivery_revocation.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhookfd258d9a47caPayload variant 1: `event_type` = `"delivery_revocation.created"`

oneOf variant 1: The `delivery_revocation.created` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"delivery_revocation.created"`.

### IncomingWebhookfd258d9a47caPayload variant 2: `event_type` = `"delivery_revocation.created"`

oneOf variant 2: The `delivery_revocation.created` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"delivery_revocation.created"`.

### IncomingWebhookfd258d9a47caPayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation) | A withdrawal of a previously available delivery choice. `object`: [field definitions](../models/IncomingWebhookfd258d9a47caPayload.md#incomingwebhookfd258d9a47capayloaddataobject). |

### IncomingWebhookfd258d9a47caPayload.data.object

A withdrawal of a previously available delivery choice.

Field definitions: [shared fields](DeliveryRevocation.md#deliveryrevocation).

### IncomingWebhookfd258d9a47caPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhookfd258d9a47caPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

