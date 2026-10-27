[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCardSummaryInput

Display details for a card payment source: brand, last four digits, and payment method ID.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `brand` | Optional | string | Values: `"visa"`, `"mastercard"`, `"amex"`, `"discover"`, `"diners"`, `"jcb"`, `"unionpay"`. |
| `last4` | Optional | string |  |
| `payment_method_id` | Optional | string |  |

