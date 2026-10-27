[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventBalanceTransactionCreated

The `balance_transaction.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventBalanceTransactionCreatedData](../models/WebhookEventBalanceTransactionCreatedData.md#webhookeventbalancetransactioncreateddata) | `data`: [field definitions](../models/WebhookEventBalanceTransactionCreated.md#webhookeventbalancetransactioncreateddata-fields-1). |
| `event_type` | Required | string | Values: `"balance_transaction.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventBalanceTransactionCreatedRequest](../models/WebhookEventBalanceTransactionCreatedRequest.md#webhookeventbalancetransactioncreatedrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventBalanceTransactionCreated.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction) | A change to the merchant's balance. `object`: [field definitions](../models/WebhookEventBalanceTransactionCreated.md#webhookeventbalancetransactioncreateddata-fields-1object). |

### WebhookEventBalanceTransactionCreated.data fields 1.object

A change to the merchant's balance.

Field definitions: [shared fields](BalanceTransactionsGetResponse200.md#balancetransactionsgetresponse200data).

