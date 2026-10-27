[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewPaymentSummary

The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `authorization_expires_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `capture_method` | Required | string | Values: `"automatic"`, `"manual"`. |
| `email` | Required | string |  |
| `last4` | Required | string |  |
| `payment_method_brand` | Required | string | Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`, `"unknown"`. |

### PaymentReviewPaymentSummary.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

