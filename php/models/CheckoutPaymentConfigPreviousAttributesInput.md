[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPaymentConfigPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Optional | Array of string or null | Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `enabled_payment_options`: [declared alternatives](../models/CheckoutPaymentConfigPreviousAttributesInput.md#checkoutpaymentconfigpreviousattributesinputenabled_payment_options). |
| `payment_note` | Optional | string or null | A note shown to the buyer with the payment options. `payment_note`: [declared alternatives](../models/CheckoutPaymentConfigPreviousAttributesInput.md#checkoutpaymentconfigpreviousattributesinputpayment_note). |

### CheckoutPaymentConfigPreviousAttributesInput.enabled_payment_options

### CheckoutPaymentConfigPreviousAttributesInput.enabled_payment_options variant 1

anyOf variant 1: Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting..

- Value shape: Array of string. Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### CheckoutPaymentConfigPreviousAttributesInput.enabled_payment_options variant 2

anyOf variant 2.

- Value shape: null. Payment options for this session. The list replaces settings.checkout.enabled_payment_options; omit it to use that setting. 

### CheckoutPaymentConfigPreviousAttributesInput.payment_note

### CheckoutPaymentConfigPreviousAttributesInput.payment_note variant 1

anyOf variant 1: A note shown to the buyer with the payment options..

- Value shape: string. A note shown to the buyer with the payment options. 

### CheckoutPaymentConfigPreviousAttributesInput.payment_note variant 2

anyOf variant 2.

- Value shape: null. A note shown to the buyer with the payment options. 

