[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewPaymentSummaryInput

The payment details shown on a review: amount, capture method, authorization expiry, card brand and last four digits, and buyer email.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The payment's requested amount when it was confirmed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Required | string or null | Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `capture_method` | Required | string | Whether the payment collects when confirmed or holds the funds for a later capture. Values: `"automatic"`, `"manual"`. |
| `email` | Required | string | The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. |
| `last4` | Required | string | Last four digits of the card number. Empty when the payment has no card details. |
| `payment_method_brand` | Required | string | The card network, as recorded when the payment was confirmed. Values: `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"mastercard"`, `"unionpay"`, `"visa"`. |

