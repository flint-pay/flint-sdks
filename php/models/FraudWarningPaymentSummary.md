[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningPaymentSummary

Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The payment amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `email` | Required | string | Email address the buyer gave for the payment. |
| `last4` | Required | string | Last four digits of the card. |
| `payment_method_brand` | Required | string | The card network. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. |

