[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeWonEvent

The `dispute.won` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DisputeWonEventData](../models/DisputeWonEventData.md#disputewoneventdata) | `data`: [field definitions](../models/DisputeWonEvent.md#disputewoneventdata-fields-1). |
| `event_type` | Required | string | Values: `"dispute.won"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DisputeWonEventRequest](../models/DisputeWonEventRequest.md#disputewoneventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DisputeWonEvent.data fields 1

Field definitions: [shared fields](DisputeCreatedEvent.md#disputecreatedeventdata-fields-1).

### DisputeWonEvent.data fields 1.object

Field definitions: [DisputeCreatedEvent.data fields 1.object](../models/DisputeCreatedEvent.md#disputecreatedeventdata-fields-1object).

