[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardTransactionInput

Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_after_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_before_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cash_out_reference` | Required | string or null | Your reference for the cash you paid the buyer outside Flint. Set only on cash_out transactions; null for other transactions. maxLength: `255`. |
| `gift_card_id` | Required | string | Gift card whose balance this transaction changed. |
| `gift_card_transaction_id` | Required | string | Stable identifier of the transaction. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. |
| `merchant_sequence` | Required | integer | Position of this transaction among all of your gift card transactions in this environment. It increases by one with each posted transaction, and the transaction list is ordered by it. Format: `int64`. |
| `order_id` | Optional | string | Order this transaction belongs to, when there is one. |
| `posted_at` | Required | string | When the transaction was posted to the card. Format: `date-time`. |
| `reason` | Required | string or null | Your adjustment reason on adjustment transactions; customer_request on cash_out; null on all other transaction types. Values: [7 declared values](#giftcardtransactioninput-reason-values). |
| `sequence` | Required | integer | Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Format: `int64`. |
| `source` | Required | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) or null | The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. null when the cause has no public resource. |
| `transaction_type` | Required | string | Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Values: [11 declared values](#giftcardtransactioninput-transaction_type-values). |

#### GiftCardTransactionInput reason values

- `"complimentary"`
- `"balance_accidentally_decreased"`
- `"support_issue"`
- `"suspicious_activity"`
- `"balance_accidentally_increased"`
- `"customer_request"`
- `null`

#### GiftCardTransactionInput transaction_type values

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

