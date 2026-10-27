[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventPayoutCanceled

The `payout.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventPayoutCanceledData](../models/WebhookEventPayoutCanceledData.md#webhookeventpayoutcanceleddata) | `data`: [field definitions](../models/WebhookEventPayoutCanceled.md#webhookeventpayoutcanceleddata-fields-1). |
| `event_type` | Required | string | Values: `"payout.canceled"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventPayoutCanceledRequest](../models/WebhookEventPayoutCanceledRequest.md#webhookeventpayoutcanceledrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventPayoutCanceled.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Payout](../models/Payout.md#payout) | Funds sent from a merchant balance to a payout destination. `object`: [field definitions](../models/WebhookEventPayoutCanceled.md#webhookeventpayoutcanceleddata-fields-1object). |

### WebhookEventPayoutCanceled.data fields 1.object

Funds sent from a merchant balance to a payout destination.

Field definitions: [shared fields](PayoutsCancelResponse200.md#payoutscancelresponse200data).

### WebhookEventPayoutCanceled.data fields 1.object.original_payout

Declared alternatives: [PayoutsCancelResponse200.data.original_payout](../models/PayoutsCancelResponse200.md#payoutscancelresponse200dataoriginal_payout).

### WebhookEventPayoutCanceled.data fields 1.object.payout_destination

Declared alternatives: [PayoutsCancelResponse200.data.payout_destination](../models/PayoutsCancelResponse200.md#payoutscancelresponse200datapayout_destination).

### WebhookEventPayoutCanceled.data fields 1.object.reversed_by_payout

Declared alternatives: [PayoutsCancelResponse200.data.reversed_by_payout](../models/PayoutsCancelResponse200.md#payoutscancelresponse200datareversed_by_payout).

