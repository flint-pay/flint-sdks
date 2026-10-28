[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhooka822b93dd6a2PayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhooka822b93dd6a2PayloadInput.md#incomingwebhooka822b93dd6a2payloadinputdata). |
| `event_type` | Required | string | Values: `"inventory_count.applied"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhooka822b93dd6a2PayloadInput variant 1: `event_type` = `"inventory_count.applied"`

oneOf variant 1: The `inventory_count.applied` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"inventory_count.applied"`.

### IncomingWebhooka822b93dd6a2PayloadInput variant 2: `event_type` = `"inventory_count.applied"`

oneOf variant 2: The `inventory_count.applied` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"inventory_count.applied"`.

### IncomingWebhooka822b93dd6a2PayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryCountInput](../models/InventoryCountInput.md#inventorycountinput) | A physical count used to reconcile stock. `object`: [field definitions](../models/IncomingWebhooka822b93dd6a2PayloadInput.md#incomingwebhooka822b93dd6a2payloadinputdataobject). |

### IncomingWebhooka822b93dd6a2PayloadInput.data.object

A physical count used to reconcile stock.

Field definitions: [shared fields](InventoryCountInput.md#inventorycountinput).

### IncomingWebhooka822b93dd6a2PayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhooka822b93dd6a2PayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

