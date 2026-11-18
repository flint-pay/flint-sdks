[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningPaymentSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The payment amount. `amount_money`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributes.md#fraudwarningpaymentsummarypreviousattributesamount_money). |
| `email` | Optional | string or null | Email address the buyer gave for the payment. `email`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributes.md#fraudwarningpaymentsummarypreviousattributesemail). |
| `last4` | Optional | string or null | Last four digits of the card. `last4`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributes.md#fraudwarningpaymentsummarypreviousattributeslast4). |
| `payment_method_brand` | Optional | string or null | The card network. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. `payment_method_brand`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributes.md#fraudwarningpaymentsummarypreviousattributespayment_method_brand). |

### FraudWarningPaymentSummaryPreviousAttributes.amount_money

The payment amount.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### FraudWarningPaymentSummaryPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### FraudWarningPaymentSummaryPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The payment amount. 

### FraudWarningPaymentSummaryPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### FraudWarningPaymentSummaryPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### FraudWarningPaymentSummaryPreviousAttributes.email

### FraudWarningPaymentSummaryPreviousAttributes.email variant 1

anyOf variant 1: Email address the buyer gave for the payment..

- Value shape: string. Email address the buyer gave for the payment. 

### FraudWarningPaymentSummaryPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. Email address the buyer gave for the payment. 

### FraudWarningPaymentSummaryPreviousAttributes.last4

### FraudWarningPaymentSummaryPreviousAttributes.last4 variant 1

anyOf variant 1: Last four digits of the card..

- Value shape: string. Last four digits of the card. 

### FraudWarningPaymentSummaryPreviousAttributes.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the card. 

### FraudWarningPaymentSummaryPreviousAttributes.payment_method_brand

### FraudWarningPaymentSummaryPreviousAttributes.payment_method_brand variant 1

anyOf variant 1: The card network..

- Value shape: string. The card network. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`.

### FraudWarningPaymentSummaryPreviousAttributes.payment_method_brand variant 2

anyOf variant 2.

- Value shape: null. The card network. 

