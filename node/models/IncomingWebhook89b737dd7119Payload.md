[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook89b737dd7119Payload

The `balance_transaction.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook89b737dd7119Payload.md#incomingwebhook89b737dd7119payloaddata). |
| `event_type` | Required | string | Values: `"balance_transaction.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook89b737dd7119Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction) | A change to the merchant's balance. `object`: [field definitions](../models/IncomingWebhook89b737dd7119Payload.md#incomingwebhook89b737dd7119payloaddataobject). |

### IncomingWebhook89b737dd7119Payload.data.object

A change to the merchant's balance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed gross amount of this balance movement, before any fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BalanceTransaction.md#balancetransactionamount_money). |
| `available_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `balance_transaction_id` | Required | string |  |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string |  |
| `fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flint fee for this balance movement, never a provider cost passed through. Charges are positive; returned fees are negative. A payment of 5000 with a fee of 175 has a net amount of 4825. A payout reversal returning a fee of 25 reports fee_money -25. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `fee_money`: [field definitions](../models/BalanceTransaction.md#balancetransactionfee_money). |
| `merchant_id` | Required | string |  |
| `net_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `net_money`: [field definitions](../models/BalanceTransaction.md#balancetransactionnet_money). |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null |  |
| `order_id` | Optional | string |  |
| `payout_id` | Optional | string | The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. |
| `related_balance_transaction_ids` | Required | Array of string |  |
| `related_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | A reference to another resource by `resource_type` and `resource_id`. `related_resource`: [field definitions](../models/BalanceTransaction.md#balancetransactionrelated_resource). |
| `status` | Required | string | Values: `"pending"`, `"available"`. |
| `type` | Required | string | Kind of balance movement. Unmapped movement types are returned as other. Values: [18 declared values](BalanceTransaction.md#balancetransaction-type-values). |

### IncomingWebhook89b737dd7119Payload.data.object.amount_money

Field definitions: [BalanceTransaction.amount_money](../models/BalanceTransaction.md#balancetransactionamount_money).

### IncomingWebhook89b737dd7119Payload.data.object.fee_money

Field definitions: [BalanceTransaction.fee_money](../models/BalanceTransaction.md#balancetransactionfee_money).

### IncomingWebhook89b737dd7119Payload.data.object.net_money

Field definitions: [BalanceTransaction.net_money](../models/BalanceTransaction.md#balancetransactionnet_money).

### IncomingWebhook89b737dd7119Payload.data.object.related_resource

Field definitions: [BalanceTransaction.related_resource](../models/BalanceTransaction.md#balancetransactionrelated_resource).

### IncomingWebhook89b737dd7119Payload.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

