[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeLostEvent

The `dispute.lost` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DisputeLostEventData](../models/DisputeLostEventData.md#disputelosteventdata) | `data`: [field definitions](../models/DisputeLostEvent.md#disputelosteventdata-fields-1). |
| `event_type` | Required | string | Values: `"dispute.lost"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DisputeLostEventRequest](../models/DisputeLostEventRequest.md#disputelosteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DisputeLostEvent.data fields 1

Field definitions: [shared fields](DisputeCreatedEvent.md#disputecreatedeventdata-fields-1).

### DisputeLostEvent.data fields 1.object

Field definitions: [DisputeCreatedEvent.data fields 1.object](../models/DisputeCreatedEvent.md#disputecreatedeventdata-fields-1object).

