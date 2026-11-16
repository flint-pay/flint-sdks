[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningPaymentSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The payment amount. |
| `email` | Optional | string or null | Email address the buyer gave for the payment. `email`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributesInput.md#fraudwarningpaymentsummarypreviousattributesinputemail). |
| `last4` | Optional | string or null | Last four digits of the card. `last4`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributesInput.md#fraudwarningpaymentsummarypreviousattributesinputlast4). |
| `payment_method_brand` | Optional | string or null | The card network. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. `payment_method_brand`: [declared alternatives](../models/FraudWarningPaymentSummaryPreviousAttributesInput.md#fraudwarningpaymentsummarypreviousattributesinputpayment_method_brand). |

### FraudWarningPaymentSummaryPreviousAttributesInput.email

### FraudWarningPaymentSummaryPreviousAttributesInput.email variant 1

anyOf variant 1: Email address the buyer gave for the payment..

- Value shape: string. Email address the buyer gave for the payment. 

### FraudWarningPaymentSummaryPreviousAttributesInput.email variant 2

anyOf variant 2.

- Value shape: null. Email address the buyer gave for the payment. 

### FraudWarningPaymentSummaryPreviousAttributesInput.last4

### FraudWarningPaymentSummaryPreviousAttributesInput.last4 variant 1

anyOf variant 1: Last four digits of the card..

- Value shape: string. Last four digits of the card. 

### FraudWarningPaymentSummaryPreviousAttributesInput.last4 variant 2

anyOf variant 2.

- Value shape: null. Last four digits of the card. 

### FraudWarningPaymentSummaryPreviousAttributesInput.payment_method_brand

### FraudWarningPaymentSummaryPreviousAttributesInput.payment_method_brand variant 1

anyOf variant 1: The card network..

- Value shape: string. The card network. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`.

### FraudWarningPaymentSummaryPreviousAttributesInput.payment_method_brand variant 2

anyOf variant 2.

- Value shape: null. The card network. 

