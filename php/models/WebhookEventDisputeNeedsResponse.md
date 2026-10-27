[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventDisputeNeedsResponse

The `dispute.needs_response` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventDisputeNeedsResponseData](../models/WebhookEventDisputeNeedsResponseData.md#webhookeventdisputeneedsresponsedata) | `data`: [field definitions](../models/WebhookEventDisputeNeedsResponse.md#webhookeventdisputeneedsresponsedata-fields-1). |
| `event_type` | Required | string | Values: `"dispute.needs_response"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventDisputeNeedsResponseRequest](../models/WebhookEventDisputeNeedsResponseRequest.md#webhookeventdisputeneedsresponserequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventDisputeNeedsResponse.data fields 1

Field definitions: [shared fields](WebhookEventDisputeCreated.md#webhookeventdisputecreateddata-fields-1).

### WebhookEventDisputeNeedsResponse.data fields 1.object

Field definitions: [WebhookEventDisputeCreated.data fields 1.object](../models/WebhookEventDisputeCreated.md#webhookeventdisputecreateddata-fields-1object).

