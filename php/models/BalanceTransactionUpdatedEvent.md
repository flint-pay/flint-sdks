[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionUpdatedEvent

The `balance_transaction.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [BalanceTransactionUpdatedEventData](../models/BalanceTransactionUpdatedEventData.md#balancetransactionupdatedeventdata) | `data`: [field definitions](../models/BalanceTransactionUpdatedEvent.md#balancetransactionupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"balance_transaction.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [BalanceTransactionUpdatedEventRequest](../models/BalanceTransactionUpdatedEventRequest.md#balancetransactionupdatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BalanceTransactionUpdatedEvent.data fields 1

Field definitions: [shared fields](BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventdata-fields-1).

### BalanceTransactionUpdatedEvent.data fields 1.object

Field definitions: [BalanceTransactionCreatedEvent.data fields 1.object](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventdata-fields-1object).

