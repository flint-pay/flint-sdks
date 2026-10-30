[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceUpdatedEvent

The `balance.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [BalanceUpdatedEventData](../models/BalanceUpdatedEventData.md#balanceupdatedeventdata) | `data`: [field definitions](../models/BalanceUpdatedEvent.md#balanceupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"balance.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [BalanceUpdatedEventRequest](../models/BalanceUpdatedEventRequest.md#balanceupdatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BalanceUpdatedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Balance](../models/Balance.md#balance) | Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money. `object`: [field definitions](../models/BalanceUpdatedEvent.md#balanceupdatedeventdata-fields-1object). |

### BalanceUpdatedEvent.data fields 1.object

Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.

Field definitions: [shared fields](BalanceListResponse.md#balancelistresponsedata).

