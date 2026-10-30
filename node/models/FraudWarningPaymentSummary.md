[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningPaymentSummary

Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `email` | Required | string |  |
| `last4` | Required | string |  |
| `payment_method_brand` | Required | string | Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. |

### FraudWarningPaymentSummary.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

