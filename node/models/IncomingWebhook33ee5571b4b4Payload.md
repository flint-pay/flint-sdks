[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook33ee5571b4b4Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook33ee5571b4b4Payload.md#incomingwebhook33ee5571b4b4payloaddata). |
| `event_type` | Required | string | Values: `"delivery_method.updated"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook33ee5571b4b4Payload variant 1: `event_type` = `"delivery_method.updated"`

oneOf variant 1: The `delivery_method.updated` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"delivery_method.updated"`.

### IncomingWebhook33ee5571b4b4Payload variant 2: `event_type` = `"delivery_method.updated"`

oneOf variant 2: The `delivery_method.updated` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"delivery_method.updated"`.

### IncomingWebhook33ee5571b4b4Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod) | A configured shipping, pickup, local delivery, or service option. `object`: [field definitions](../models/IncomingWebhook33ee5571b4b4Payload.md#incomingwebhook33ee5571b4b4payloaddataobject). |

### IncomingWebhook33ee5571b4b4Payload.data.object

A configured shipping, pickup, local delivery, or service option.

Field definitions: [shared fields](DeliveryMethod.md#deliverymethod).

### IncomingWebhook33ee5571b4b4Payload.data.object.metadata

Field definitions: [DeliveryLocationSet.metadata](../models/DeliveryLocationSet.md#deliverylocationsetmetadata).

### IncomingWebhook33ee5571b4b4Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook33ee5571b4b4Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

