[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerGiftCardTransactionInput

A record of a change to a gift card's balance.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_after_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_before_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string |  |
| `gift_card_transaction_id` | Required | string |  |
| `posted_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `sequence` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `transaction_type` | Required | string | Values: [11 declared values](#buyergiftcardtransactioninput-transaction_type-values). |

#### BuyerGiftCardTransactionInput transaction_type values

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

