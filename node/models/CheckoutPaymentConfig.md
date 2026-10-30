[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPaymentConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Optional | Array of string | Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_note` | Optional | string |  |

### CheckoutPaymentConfig variant 1

anyOf variant 1: Declared schema CheckoutPaymentConfig. Payment settings for a checkout: the enabled payment options and a note shown with payment..

- Constraints for `enabled_payment_options`: Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### CheckoutPaymentConfig variant 2

anyOf variant 2: Declared schema CheckoutPaymentConfigRequest. Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment..

- Constraints for `enabled_payment_options`: Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.
- Constraints for `payment_note`: minLength: `1`.

### CheckoutPaymentConfig variant 3

anyOf variant 3: Declared schema PaymentLinkPaymentConfig. Payment settings on a payment link: the enabled payment options and a note shown with payment..

- Constraints for `enabled_payment_options`: Payment options for this payment link. Checkout offers only the options that are also enabled in settings.checkout.enabled_payment_options; omit the list to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.
- Constraints for `payment_note`: minLength: `1`. maxLength: `500`.

