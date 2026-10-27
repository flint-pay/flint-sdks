[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventBalanceUpdated

The `balance.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventBalanceUpdatedData](../models/WebhookEventBalanceUpdatedData.md#webhookeventbalanceupdateddata) | `data`: [field definitions](../models/WebhookEventBalanceUpdated.md#webhookeventbalanceupdateddata-fields-1). |
| `event_type` | Required | string | Values: `"balance.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventBalanceUpdatedRequest](../models/WebhookEventBalanceUpdatedRequest.md#webhookeventbalanceupdatedrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventBalanceUpdated.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Balance](../models/Balance.md#balance) | Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money. `object`: [field definitions](../models/WebhookEventBalanceUpdated.md#webhookeventbalanceupdateddata-fields-1object). |

### WebhookEventBalanceUpdated.data fields 1.object

Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.

Field definitions: [shared fields](BalancesListResponse200.md#balanceslistresponse200data).

