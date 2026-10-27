[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhooka822b93dd6a2Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhooka822b93dd6a2Payload.md#incomingwebhooka822b93dd6a2payloaddata). |
| `event_type` | Required | string | Values: `"inventory_count.applied"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhooka822b93dd6a2Payload variant 1: `event_type` = `"inventory_count.applied"`

oneOf variant 1: The `inventory_count.applied` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"inventory_count.applied"`.

### IncomingWebhooka822b93dd6a2Payload variant 2: `event_type` = `"inventory_count.applied"`

oneOf variant 2: The `inventory_count.applied` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"inventory_count.applied"`.

### IncomingWebhooka822b93dd6a2Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryCount](../models/InventoryCount.md#inventorycount) | A physical count used to reconcile stock. `object`: [field definitions](../models/IncomingWebhooka822b93dd6a2Payload.md#incomingwebhooka822b93dd6a2payloaddataobject). |

### IncomingWebhooka822b93dd6a2Payload.data.object

A physical count used to reconcile stock.

Field definitions: [shared fields](InventoryCount.md#inventorycount).

### IncomingWebhooka822b93dd6a2Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhooka822b93dd6a2Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

