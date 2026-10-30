[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardTransactionCreatedMerchantEvent

The `gift_card_transaction.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [GiftCardTransactionCreatedMerchantEventData](../models/GiftCardTransactionCreatedMerchantEventData.md#giftcardtransactioncreatedmerchanteventdata) | `data`: [field definitions](../models/GiftCardTransactionCreatedMerchantEvent.md#giftcardtransactioncreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"gift_card_transaction.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [GiftCardTransactionCreatedMerchantEventRequest](../models/GiftCardTransactionCreatedMerchantEventRequest.md#giftcardtransactioncreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardTransactionCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) | Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions. `object`: [field definitions](../models/GiftCardTransactionCreatedMerchantEvent.md#giftcardtransactioncreatedmerchanteventdata-fields-1object). |

### GiftCardTransactionCreatedMerchantEvent.data fields 1.object

Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_after_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_before_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cash_out_reference` | Required | string or null | Your reference for the cash you paid the buyer outside Flint. Set only on cash_out transactions; null for other transactions. maxLength: `255`. |
| `gift_card_id` | Required | string | Gift card whose balance this transaction changed. |
| `gift_card_transaction_id` | Required | string | Stable identifier of the transaction. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. |
| `merchant_sequence` | Required | integer | Position of this transaction among all of your gift card transactions in this environment. It increases by one with each posted transaction, and the transaction list is ordered by it. Format: `int64`. |
| `order_id` | Optional | string | Order this transaction belongs to, when there is one. |
| `posted_at` | Required | string | When the transaction was posted to the card. Format: `date-time`. |
| `reason` | Required | string or null | Your adjustment reason on adjustment transactions; customer_request on cash_out; null on all other transaction types. Values: [7 declared values](#giftcardtransactioncreatedmerchanteventdata-fields-1object-reason-values). |
| `sequence` | Required | integer | Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Format: `int64`. |
| `source` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. null when the cause has no public resource. |
| `transaction_type` | Required | string | Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Values: [11 declared values](#giftcardtransactioncreatedmerchanteventdata-fields-1object-transaction_type-values). |

#### GiftCardTransactionCreatedMerchantEvent.data fields 1.object reason values

- `"complimentary"`
- `"balance_accidentally_decreased"`
- `"support_issue"`
- `"suspicious_activity"`
- `"balance_accidentally_increased"`
- `"customer_request"`
- `null`

#### GiftCardTransactionCreatedMerchantEvent.data fields 1.object transaction_type values

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

