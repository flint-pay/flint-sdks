[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationCreatedEvent

The `payout_destination.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PayoutDestinationCreatedEventData](../models/PayoutDestinationCreatedEventData.md#payoutdestinationcreatedeventdata) | `data`: [field definitions](../models/PayoutDestinationCreatedEvent.md#payoutdestinationcreatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"payout_destination.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PayoutDestinationCreatedEventRequest](../models/PayoutDestinationCreatedEventRequest.md#payoutdestinationcreatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PayoutDestinationCreatedEvent.data fields 1

Field definitions: [shared fields](PayoutDestinationArchivedEvent.md#payoutdestinationarchivedeventdata-fields-1).

### PayoutDestinationCreatedEvent.data fields 1.object

Field definitions: [PayoutDestinationArchivedEvent.data fields 1.object](../models/PayoutDestinationArchivedEvent.md#payoutdestinationarchivedeventdata-fields-1object).

