[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardTransaction

Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/GiftCardTransaction.md#giftcardtransactionamount_money). |
| `balance_after_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_after_money`: [field definitions](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_after_money). |
| `balance_before_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_before_money`: [field definitions](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_before_money). |
| `cash_out_reference` | Required | string or null | Your reference for the cash you paid the buyer outside Flint. `null` when the transaction is not a cash_out. maxLength: `255`. |
| `gift_card_id` | Required | string | Gift card whose balance this transaction changed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_transaction_id` | Required | string | Stable identifier of the transaction. Example: `"gct_01KEZF7C006Q1VC3M2DXJ6T936"`. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. |
| `merchant_sequence` | Required | integer | Position of this transaction among all of your gift card transactions in this environment. It increases by one with each posted transaction, and the transaction list is ordered by it. Format: `int64`. |
| `order_id` | Optional | string | Order this transaction belongs to, when there is one. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `posted_at` | Required | string | When the transaction was posted to the card. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason` | Required | string or null | Your adjustment reason on adjustment transactions, and customer_request on cash_out. `null` when the transaction is any other type. Values: [7 declared values](#giftcardtransaction-reason-values). |
| `sequence` | Required | integer | Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Format: `int64`. |
| `source` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. `null` when the cause has no public resource. |
| `transaction_type` | Required | string | Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Values: [11 declared values](#giftcardtransaction-transaction_type-values). |

#### GiftCardTransaction reason values

- `"complimentary"`
- `"balance_accidentally_decreased"`
- `"support_issue"`
- `"suspicious_activity"`
- `"balance_accidentally_increased"`
- `"customer_request"`
- `null`

#### GiftCardTransaction transaction_type values

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

### GiftCardTransaction.amount_money

Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

### GiftCardTransaction.balance_after_money

Field definitions: [BuyerGiftCardTransaction.balance_after_money](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_after_money).

### GiftCardTransaction.balance_before_money

Field definitions: [BuyerGiftCardTransaction.balance_before_money](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_before_money).

