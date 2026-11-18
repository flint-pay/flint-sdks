[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentProcessingFeeDetailInput

An applied component of the processing fee. Amounts sum exactly to processing_fee_money.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | This component's amount, in the payment currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Applied fee component: base percentage, international card, manual entry, currency conversion, or fixed amount. Values: `"base"`, `"international_card"`, `"manual_entry"`, `"currency_conversion"`, `"fixed"`. |

