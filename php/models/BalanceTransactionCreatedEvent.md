[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionCreatedEvent

The `balance_transaction.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [BalanceTransactionCreatedEventData](../models/BalanceTransactionCreatedEventData.md#balancetransactioncreatedeventdata) | `data`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"balance_transaction.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [BalanceTransactionCreatedEventRequest](../models/BalanceTransactionCreatedEventRequest.md#balancetransactioncreatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BalanceTransactionCreatedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction) | A change to the merchant's balance. `object`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventdata-fields-1object). |

### BalanceTransactionCreatedEvent.data fields 1.object

A change to the merchant's balance.

Field definitions: [shared fields](BalanceTransactionResponse.md#balancetransactionresponsedata).

