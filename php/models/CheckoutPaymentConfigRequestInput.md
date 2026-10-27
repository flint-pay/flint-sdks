[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPaymentConfigRequestInput

Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Optional | Array of string | Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_note` | Optional | string | minLength: `1`. |

