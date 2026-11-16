[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningPaymentSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The payment amount. |
| `email` | Optional | string or null | Email address the buyer gave for the payment. `email`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributes.md#fraudwarningpaymentsummarypreviousattributesemail). |
| `last4` | Optional | string or null | Last four digits of the card. `last4`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributes.md#fraudwarningpaymentsummarypreviousattributeslast4). |
| `payment_method_brand` | Optional | string or null | The card network. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. `payment_method_brand`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributes.md#fraudwarningpaymentsummarypreviousattributespayment_method_brand). |

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

