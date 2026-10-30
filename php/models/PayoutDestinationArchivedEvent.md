[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationArchivedEvent

The `payout_destination.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PayoutDestinationArchivedEventData](../models/PayoutDestinationArchivedEventData.md#payoutdestinationarchivedeventdata) | `data`: [field definitions](../models/PayoutDestinationArchivedEvent.md#payoutdestinationarchivedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"payout_destination.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PayoutDestinationArchivedEventRequest](../models/PayoutDestinationArchivedEventRequest.md#payoutdestinationarchivedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PayoutDestinationArchivedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PayoutDestination](../models/PayoutDestination.md#payoutdestination) | The account that receives merchant payouts. `object`: [field definitions](../models/PayoutDestinationArchivedEvent.md#payoutdestinationarchivedeventdata-fields-1object). |

### PayoutDestinationArchivedEvent.data fields 1.object

The account that receives merchant payouts.

Field definitions: [shared fields](PayoutDestinationResponse.md#payoutdestinationresponsedata).

### PayoutDestinationArchivedEvent.data fields 1.object.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

