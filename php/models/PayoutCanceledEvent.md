[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutCanceledEvent

The `payout.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PayoutCanceledEventData](../models/PayoutCanceledEventData.md#payoutcanceledeventdata) | `data`: [field definitions](../models/PayoutCanceledEvent.md#payoutcanceledeventdata-fields-1). |
| `event_type` | Required | string | Values: `"payout.canceled"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PayoutCanceledEventRequest](../models/PayoutCanceledEventRequest.md#payoutcanceledeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PayoutCanceledEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Payout](../models/Payout.md#payout) | Funds sent from a merchant balance to a payout destination. `object`: [field definitions](../models/PayoutCanceledEvent.md#payoutcanceledeventdata-fields-1object). |

### PayoutCanceledEvent.data fields 1.object

Funds sent from a merchant balance to a payout destination.

Field definitions: [shared fields](PayoutResponse.md#payoutresponsedata).

### PayoutCanceledEvent.data fields 1.object.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

### PayoutCanceledEvent.data fields 1.object.original_payout

Declared alternatives: [PayoutResponse.data.original_payout](../models/PayoutResponse.md#payoutresponsedataoriginal_payout).

### PayoutCanceledEvent.data fields 1.object.payout_destination

Declared alternatives: [PayoutResponse.data.payout_destination](../models/PayoutResponse.md#payoutresponsedatapayout_destination).

### PayoutCanceledEvent.data fields 1.object.reversed_by_payout

Declared alternatives: [PayoutResponse.data.reversed_by_payout](../models/PayoutResponse.md#payoutresponsedatareversed_by_payout).

