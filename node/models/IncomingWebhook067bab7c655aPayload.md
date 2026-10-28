[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook067bab7c655aPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook067bab7c655aPayload.md#incomingwebhook067bab7c655apayloaddata). |
| `event_type` | Required | string | Values: `"gift_card_transaction.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook067bab7c655aPayload variant 1: `event_type` = `"gift_card_transaction.created"`

oneOf variant 1: The `gift_card_transaction.created` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"gift_card_transaction.created"`.

### IncomingWebhook067bab7c655aPayload variant 2: `event_type` = `"gift_card_transaction.created"`

oneOf variant 2: The `gift_card_transaction.created` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"gift_card_transaction.created"`.

### IncomingWebhook067bab7c655aPayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) | Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions. `object`: [field definitions](../models/IncomingWebhook067bab7c655aPayload.md#incomingwebhook067bab7c655apayloaddataobject). |

### IncomingWebhook067bab7c655aPayload.data.object

Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/GiftCardTransaction.md#giftcardtransactionamount_money). |
| `balance_after_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_after_money`: [field definitions](../models/GiftCardTransaction.md#giftcardtransactionbalance_after_money). |
| `balance_before_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_before_money`: [field definitions](../models/GiftCardTransaction.md#giftcardtransactionbalance_before_money). |
| `cash_out_reference` | Required | string or null | Your reference for the cash you paid the buyer outside Flint. Set only on cash_out transactions; null for other transactions. maxLength: `255`. |
| `gift_card_id` | Required | string | Gift card whose balance this transaction changed. |
| `gift_card_transaction_id` | Required | string | Stable identifier of the transaction. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. |
| `merchant_sequence` | Required | integer string | Position of this transaction among all of your gift card transactions in this environment. It increases by one with each posted transaction, and the transaction list is ordered by it. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `order_id` | Optional | string | Order this transaction belongs to, when there is one. |
| `posted_at` | Required | string | When the transaction was posted to the card. Format: `date-time`. |
| `reason` | Required | string or null | Your adjustment reason on adjustment transactions; customer_request on cash_out; null on all other transaction types. Values: [7 declared values](#incomingwebhook067bab7c655apayloaddataobject-reason-values). |
| `sequence` | Required | integer string | Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `source` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. null when the cause has no public resource. `source`: [declared alternatives](../models/GiftCardTransaction.md#giftcardtransactionsource). |
| `transaction_type` | Required | string | Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Values: [11 declared values](#incomingwebhook067bab7c655apayloaddataobject-transaction_type-values). |

#### IncomingWebhook067bab7c655aPayload.data.object reason values

- `"complimentary"`
- `"balance_accidentally_decreased"`
- `"support_issue"`
- `"suspicious_activity"`
- `"balance_accidentally_increased"`
- `"customer_request"`
- `null`

#### IncomingWebhook067bab7c655aPayload.data.object transaction_type values

- `"load"`
- `"import"`
- `"redeem"`
- `"refund"`
- `"refund_transfer"`
- `"adjustment"`
- `"cash_out"`
- `"purchase_reversal"`
- `"funding_loss_accepted"`
- `"purchase_refund_recovery"`
- `"purchase_refund_recovery_transfer"`

### IncomingWebhook067bab7c655aPayload.data.object.amount_money

Field definitions: [GiftCardTransaction.amount_money](../models/GiftCardTransaction.md#giftcardtransactionamount_money).

### IncomingWebhook067bab7c655aPayload.data.object.balance_after_money

Field definitions: [GiftCardTransaction.balance_after_money](../models/GiftCardTransaction.md#giftcardtransactionbalance_after_money).

### IncomingWebhook067bab7c655aPayload.data.object.balance_before_money

Field definitions: [GiftCardTransaction.balance_before_money](../models/GiftCardTransaction.md#giftcardtransactionbalance_before_money).

### IncomingWebhook067bab7c655aPayload.data.object.source

Declared alternatives: [GiftCardTransaction.source](../models/GiftCardTransaction.md#giftcardtransactionsource).

### IncomingWebhook067bab7c655aPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook067bab7c655aPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

