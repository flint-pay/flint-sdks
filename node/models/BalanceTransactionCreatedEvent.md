[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionCreatedEvent

The `balance_transaction.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventdata). |
| `event_type` | Required | string | Values: `"balance_transaction.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventrequest). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### BalanceTransactionCreatedEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction) | A change to the merchant's balance. `object`: [field definitions](../models/BalanceTransactionCreatedEvent.md#balancetransactioncreatedeventdataobject). |

### BalanceTransactionCreatedEvent.data.object

A change to the merchant's balance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed gross amount of this balance movement, before any fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BalanceTransaction.md#balancetransactionamount_money). |
| `available_at` | Optional | string | When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: `date-time`. |
| `balance_transaction_id` | Required | string | Stable identifier of this balance transaction. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string | Short text describing the movement, from Flint or your processor. Use it for display, not for matching. |
| `fee_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fee deducted from this balance movement. On payments, this is processing_fee_money plus every add-on fee in add_on_fees. On disputes and dispute reversals, this includes the processor's dispute fee charged to your balance or actually returned to it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by itself return the fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `fee_money`: [field definitions](../models/BalanceTransaction.md#balancetransactionfee_money). |
| `merchant_id` | Required | string | Merchant whose balance this transaction moved. |
| `net_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `net_money`: [field definitions](../models/BalanceTransaction.md#balancetransactionnet_money). |
| `occurred_at` | Required | string | When the balance movement happened. Format: `date-time`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string | The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. |
| `payout_id` | Optional | string | The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. |
| `related_balance_transaction_ids` | Required | Array of string | Earlier balance transactions this one is linked to, such as the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. |
| `related_resource` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The Flint resource behind this movement: a payment_intent, refund, dispute, payout, payout_destination, or merchant_billing_invoice. Absent when the movement has none. A reference to another resource by `resource_type` and `resource_id`. `related_resource`: [field definitions](../models/BalanceTransaction.md#balancetransactionrelated_resource). |
| `status` | Required | string | Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Values: `"pending"`, `"available"`. |
| `type` | Required | string | Kind of balance movement. Unmapped movement types are returned as other. Values: [18 declared values](BalanceTransaction.md#balancetransaction-type-values). |

### BalanceTransactionCreatedEvent.data.object.amount_money

Field definitions: [BalanceTransaction.amount_money](../models/BalanceTransaction.md#balancetransactionamount_money).

### BalanceTransactionCreatedEvent.data.object.fee_money

Field definitions: [BalanceTransaction.fee_money](../models/BalanceTransaction.md#balancetransactionfee_money).

### BalanceTransactionCreatedEvent.data.object.net_money

Field definitions: [BalanceTransaction.net_money](../models/BalanceTransaction.md#balancetransactionnet_money).

### BalanceTransactionCreatedEvent.data.object.related_resource

Field definitions: [BalanceTransaction.related_resource](../models/BalanceTransaction.md#balancetransactionrelated_resource).

### BalanceTransactionCreatedEvent.request

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | string |  |
| `idempotency_key` | Optional | string | The Idempotency-Key the originating request sent. Absent when it sent none. |

