[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningPaymentSummary

Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `email` | Required | string |  |
| `last4` | Required | string |  |
| `payment_method_brand` | Required | string | Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. |

### FraudWarningPaymentSummary.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

