[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook89b737dd7119PayloadInput

The `balance_transaction.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook89b737dd7119PayloadInput.md#incomingwebhook89b737dd7119payloadinputdata). |
| `event_type` | Required | string | Values: `"balance_transaction.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook89b737dd7119PayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [BalanceTransactionInput](../models/BalanceTransactionInput.md#balancetransactioninput) | A change to the merchant's balance. `object`: [field definitions](../models/IncomingWebhook89b737dd7119PayloadInput.md#incomingwebhook89b737dd7119payloadinputdataobject). |

### IncomingWebhook89b737dd7119PayloadInput.data.object

A change to the merchant's balance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Signed gross amount of this balance movement, before any fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `available_at` | Optional | string | When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: `date-time`. |
| `balance_transaction_id` | Required | string | Stable identifier of this balance transaction. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Optional | string | Short text describing the movement, from Flint or your processor. Use it for display, not for matching. |
| `fee_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Flint fee for this balance movement, never a provider cost passed through. Charges are positive; returned fees are negative. A payment of 5000 with a fee of 175 has a net amount of 4825. A payout reversal returning a fee of 25 reports fee_money -25. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `merchant_id` | Required | string | Merchant whose balance this transaction moved. |
| `net_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `occurred_at` | Required | string | When the balance movement happened. Format: `date-time`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null | The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. |
| `order_id` | Optional | string | The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. |
| `payout_id` | Optional | string | The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. |
| `related_balance_transaction_ids` | Required | Array of string | Earlier balance transactions this one is linked to, such as the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. |
| `related_resource` | Optional | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | The Flint resource behind this movement: a payment_intent, refund, dispute, payout, payout_destination, or merchant_billing_invoice. Absent when the movement has none. A reference to another resource by `resource_type` and `resource_id`. |
| `status` | Required | string | Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Values: `"pending"`, `"available"`. |
| `type` | Required | string | Kind of balance movement. Unmapped movement types are returned as other. Values: [18 declared values](BalanceTransactionInput.md#balancetransactioninput-type-values). |

### IncomingWebhook89b737dd7119PayloadInput.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

