[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutCreatedEvent

The `payout.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PayoutCreatedEventData](../models/PayoutCreatedEventData.md#payoutcreatedeventdata) | `data`: [field definitions](../models/PayoutCreatedEvent.md#payoutcreatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"payout.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PayoutCreatedEventRequest](../models/PayoutCreatedEventRequest.md#payoutcreatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PayoutCreatedEvent.data fields 1

Field definitions: [shared fields](PayoutCanceledEvent.md#payoutcanceledeventdata-fields-1).

### PayoutCreatedEvent.data fields 1.object

Field definitions: [PayoutCanceledEvent.data fields 1.object](../models/PayoutCanceledEvent.md#payoutcanceledeventdata-fields-1object).

