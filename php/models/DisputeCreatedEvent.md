[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeCreatedEvent

The `dispute.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DisputeCreatedEventData](../models/DisputeCreatedEventData.md#disputecreatedeventdata) | `data`: [field definitions](../models/DisputeCreatedEvent.md#disputecreatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"dispute.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DisputeCreatedEventRequest](../models/DisputeCreatedEventRequest.md#disputecreatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DisputeCreatedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Dispute](../models/Dispute.md#dispute) | A challenge to a collected payment. `object`: [field definitions](../models/DisputeCreatedEvent.md#disputecreatedeventdata-fields-1object). |

### DisputeCreatedEvent.data fields 1.object

A challenge to a collected payment.

Field definitions: [shared fields](Dispute.md#dispute).

