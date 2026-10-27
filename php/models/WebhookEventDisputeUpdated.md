[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventDisputeUpdated

The `dispute.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventDisputeUpdatedData](../models/WebhookEventDisputeUpdatedData.md#webhookeventdisputeupdateddata) | `data`: [field definitions](../models/WebhookEventDisputeUpdated.md#webhookeventdisputeupdateddata-fields-1). |
| `event_type` | Required | string | Values: `"dispute.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventDisputeUpdatedRequest](../models/WebhookEventDisputeUpdatedRequest.md#webhookeventdisputeupdatedrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventDisputeUpdated.data fields 1

Field definitions: [shared fields](WebhookEventDisputeCreated.md#webhookeventdisputecreateddata-fields-1).

### WebhookEventDisputeUpdated.data fields 1.object

Field definitions: [WebhookEventDisputeCreated.data fields 1.object](../models/WebhookEventDisputeCreated.md#webhookeventdisputecreateddata-fields-1object).

