[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerGiftCardTransaction

A record of a change to a gift card's balance.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed change to the card's balance: positive amounts add value and negative amounts remove it. `funding_loss_accepted` records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionamount_money). |
| `balance_after_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_after_money`: [field definitions](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_after_money). |
| `balance_before_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_before_money`: [field definitions](../models/BuyerGiftCardTransaction.md#buyergiftcardtransactionbalance_before_money). |
| `gift_card_id` | Required | string | ID of the gift card whose balance this transaction changed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_transaction_id` | Required | string | Unique identifier for this gift card transaction, prefixed `gct_`. Example: `"gct_01KEZF7C006Q1VC3M2DXJ6T936"`. |
| `posted_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sequence` | Required | integer | Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Format: `int64`. |
| `transaction_type` | Required | string | Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Values: [11 declared values](#buyergiftcardtransaction-transaction_type-values). |

#### BuyerGiftCardTransaction transaction_type values

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

### BuyerGiftCardTransaction.amount_money

Signed change to the card's balance: positive amounts add value and negative amounts remove it. `funding_loss_accepted` records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

### BuyerGiftCardTransaction.balance_after_money

The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerGiftCardTransaction.balance_before_money

The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

