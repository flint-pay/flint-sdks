[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPaymentConfigRequestInput

Request input. Response: [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig).

Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Optional | Array of string | Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_note` | Optional | string | minLength: `1`. |

