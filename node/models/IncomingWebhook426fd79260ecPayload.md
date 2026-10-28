[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook426fd79260ecPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook426fd79260ecPayload.md#incomingwebhook426fd79260ecpayloaddata). |
| `event_type` | Required | string | Values: `"shipment.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook426fd79260ecPayload variant 1: `event_type` = `"shipment.created"`

oneOf variant 1: The `shipment.created` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"shipment.created"`.

### IncomingWebhook426fd79260ecPayload variant 2: `event_type` = `"shipment.created"`

oneOf variant 2: The `shipment.created` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"shipment.created"`.

### IncomingWebhook426fd79260ecPayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Shipment](../models/Shipment.md#shipment) | A shipment carrying fulfilled order items. `object`: [field definitions](../models/IncomingWebhook426fd79260ecPayload.md#incomingwebhook426fd79260ecpayloaddataobject). |

### IncomingWebhook426fd79260ecPayload.data.object

A shipment carrying fulfilled order items.

Field definitions: [shared fields](Shipment.md#shipment).

### IncomingWebhook426fd79260ecPayload.data.object.metadata

Value shape: Map of string. Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### IncomingWebhook426fd79260ecPayload.data.object.packages[]

Field definitions: [Fulfillment.packages[]](../models/Fulfillment.md#fulfillmentpackages).

### IncomingWebhook426fd79260ecPayload.data.object.return_line_items[]

Field definitions: [BuyerPackage.return_line_items[]](../models/BuyerPackage.md#buyerpackagereturn_line_items).

### IncomingWebhook426fd79260ecPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook426fd79260ecPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

