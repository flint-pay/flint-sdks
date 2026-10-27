[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerGiftCardTransaction

A record of a change to a gift card's balance.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequestamount_money). |
| `balance_after_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_after_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `balance_before_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_before_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `gift_card_id` | Required | string |  |
| `gift_card_transaction_id` | Required | string |  |
| `posted_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `sequence` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `transaction_type` | Required | string | Values: [11 declared values](#buyergiftcardtransaction-transaction_type-values). |

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

Field definitions: [AdjustGiftCardBalanceRequest.amount_money](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequestamount_money).

### BuyerGiftCardTransaction.balance_after_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### BuyerGiftCardTransaction.balance_before_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

