[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewPaymentSummary

The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `capture_method` | Required | string | Values: `"automatic"`, `"manual"`. |
| `email` | Required | string |  |
| `last4` | Required | string |  |
| `payment_method_brand` | Required | string | Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. |

