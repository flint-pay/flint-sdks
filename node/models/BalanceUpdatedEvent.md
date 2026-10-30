[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceUpdatedEvent

The `balance.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/BalanceUpdatedEvent.md#balanceupdatedeventdata). |
| `event_type` | Required | string | Values: `"balance.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BalanceUpdatedEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Balance](../models/Balance.md#balance) | Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money. `object`: [field definitions](../models/BalanceUpdatedEvent.md#balanceupdatedeventdataobject). |

### BalanceUpdatedEvent.data.object

Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.

Field definitions: [shared fields](Balance.md#balance).

### BalanceUpdatedEvent.data.object.available_by_source_type{}

Field definitions: [Balance.available_by_source_type{}](../models/Balance.md#balanceavailable_by_source_type).

### BalanceUpdatedEvent.data.object.available_money

Field definitions: [Balance.available_money](../models/Balance.md#balanceavailable_money).

### BalanceUpdatedEvent.data.object.held_money

Field definitions: [Balance.held_money](../models/Balance.md#balanceheld_money).

### BalanceUpdatedEvent.data.object.pending_by_source_type{}

Field definitions: [Balance.available_by_source_type{}](../models/Balance.md#balanceavailable_by_source_type).

### BalanceUpdatedEvent.data.object.pending_money

Field definitions: [Balance.pending_money](../models/Balance.md#balancepending_money).

### BalanceUpdatedEvent.data.object.reserve_money

Field definitions: [Balance.reserve_money](../models/Balance.md#balancereserve_money).

### BalanceUpdatedEvent.request

Field definitions: [BalanceTransactionCreatedEvent.request](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest).

