[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentProcessingFeeDetail

An applied component of the processing fee. Amounts sum exactly to processing_fee_money.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | This component's amount, in the payment currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/PaymentProcessingFeeDetail.md#paymentprocessingfeedetailamount_money). |
| `type` | Required | string | Applied fee component: base percentage, international card, manual entry, currency conversion, fixed amount, or Tap to Pay. Values: `"base"`, `"international_card"`, `"manual_entry"`, `"currency_conversion"`, `"fixed"`, `"tap_to_pay"`. |

### PaymentProcessingFeeDetail.amount_money

This component's amount, in the payment currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

