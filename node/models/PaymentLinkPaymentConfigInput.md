[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkPaymentConfigInput

Request input. Response: [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig).

Payment settings on a payment link: the enabled payment options and a note shown with payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Optional | Array of string | Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_note` | Optional | string | minLength: `1`. maxLength: `500`. |

