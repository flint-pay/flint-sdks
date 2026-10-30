[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputePreventedEvent

The `dispute.prevented` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DisputePreventedEventData](../models/DisputePreventedEventData.md#disputepreventedeventdata) | `data`: [field definitions](../models/DisputePreventedEvent.md#disputepreventedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"dispute.prevented"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DisputePreventedEventRequest](../models/DisputePreventedEventRequest.md#disputepreventedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DisputePreventedEvent.data fields 1

Field definitions: [shared fields](DisputeCreatedEvent.md#disputecreatedeventdata-fields-1).

### DisputePreventedEvent.data fields 1.object

Field definitions: [DisputeCreatedEvent.data fields 1.object](../models/DisputeCreatedEvent.md#disputecreatedeventdata-fields-1object).

