[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardTransaction

Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequestamount_money). |
| `balance_after_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_after_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `balance_before_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `balance_before_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `cash_out_reference` | Required | string or null | Your reference for the cash you paid the buyer outside Flint. Set only on cash_out transactions; null for other transactions. maxLength: `255`. |
| `gift_card_id` | Required | string |  |
| `gift_card_transaction_id` | Required | string |  |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. |
| `merchant_sequence` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `order_id` | Optional | string |  |
| `posted_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `reason` | Required | string or null | Your adjustment reason on adjustment transactions; customer_request on cash_out; null on all other transaction types. Values: [7 declared values](#giftcardtransaction-reason-values). |
| `sequence` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `source` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | `source`: [declared alternatives](../models/CheckoutDeliveryPinnedDependency.md#checkoutdeliverypinneddependencydependency). |
| `transaction_type` | Required | string | Values: [11 declared values](#giftcardtransaction-transaction_type-values). |

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

Field definitions: [AdjustGiftCardBalanceRequest.amount_money](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequestamount_money).

### GiftCardTransaction.balance_after_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### GiftCardTransaction.balance_before_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### GiftCardTransaction.source

Declared alternatives: [CheckoutDeliveryPinnedDependency.dependency](../models/CheckoutDeliveryPinnedDependency.md#checkoutdeliverypinneddependencydependency).

