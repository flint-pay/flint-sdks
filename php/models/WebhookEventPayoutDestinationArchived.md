[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventPayoutDestinationArchived

The `payout_destination.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventPayoutDestinationArchivedData](../models/WebhookEventPayoutDestinationArchivedData.md#webhookeventpayoutdestinationarchiveddata) | `data`: [field definitions](../models/WebhookEventPayoutDestinationArchived.md#webhookeventpayoutdestinationarchiveddata-fields-1). |
| `event_type` | Required | string | Values: `"payout_destination.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventPayoutDestinationArchivedRequest](../models/WebhookEventPayoutDestinationArchivedRequest.md#webhookeventpayoutdestinationarchivedrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventPayoutDestinationArchived.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PayoutDestination](../models/PayoutDestination.md#payoutdestination) | The account that receives merchant payouts. `object`: [field definitions](../models/WebhookEventPayoutDestinationArchived.md#webhookeventpayoutdestinationarchiveddata-fields-1object). |

### WebhookEventPayoutDestinationArchived.data fields 1.object

The account that receives merchant payouts.

Field definitions: [shared fields](PayoutSettingsDeletePayoutDestinationResponse200.md#payoutsettingsdeletepayoutdestinationresponse200data).

### WebhookEventPayoutDestinationArchived.data fields 1.object.metadata

Field definitions: [PayoutsCancelResponse200.data.metadata](../models/PayoutsCancelResponse200.md#payoutscancelresponse200datametadata).

