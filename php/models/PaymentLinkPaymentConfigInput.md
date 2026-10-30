[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkPaymentConfigInput

Payment settings on a payment link: the enabled payment options and a note shown with payment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Optional | Array of string | Payment options for this payment link. Checkout offers only the options that are also enabled in settings.checkout.enabled_payment_options; omit the list to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_note` | Optional | string | minLength: `1`. maxLength: `500`. |

