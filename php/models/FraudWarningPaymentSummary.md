[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningPaymentSummary

Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `email` | Required | string |  |
| `last4` | Required | string |  |
| `payment_method_brand` | Required | string | Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. |

