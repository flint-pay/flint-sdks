[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentPolicyPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Optional | Array of string or null | The payment options the buyer can use on the hosted invoice page. Send at least one. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. `enabled_payment_options`: [declared alternatives](../models/InvoicePaymentPolicyPreviousAttributes.md#invoicepaymentpolicypreviousattributesenabled_payment_options). |
| `payment_option_limits` | Optional | Array of [InvoicePaymentOptionLimitPreviousAttributes](../models/InvoicePaymentOptionLimitPreviousAttributes.md#invoicepaymentoptionlimitpreviousattributes) or null | Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. `payment_option_limits`: [declared alternatives](../models/InvoicePaymentPolicyPreviousAttributes.md#invoicepaymentpolicypreviousattributespayment_option_limits). |
| `show_cost_comparison` | Optional | boolean or null | Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. `show_cost_comparison`: [declared alternatives](../models/InvoicePaymentPolicyPreviousAttributes.md#invoicepaymentpolicypreviousattributesshow_cost_comparison). |

### InvoicePaymentPolicyPreviousAttributes.enabled_payment_options

### InvoicePaymentPolicyPreviousAttributes.enabled_payment_options variant 1

anyOf variant 1: The payment options the buyer can use on the hosted invoice page. Send at least one..

- Value shape: Array of string. The payment options the buyer can use on the hosted invoice page. Send at least one. The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: `5`. uniqueItems: `true`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`.

### InvoicePaymentPolicyPreviousAttributes.enabled_payment_options variant 2

anyOf variant 2.

- Value shape: null. The payment options the buyer can use on the hosted invoice page. Send at least one. 

### InvoicePaymentPolicyPreviousAttributes.payment_option_limits

### InvoicePaymentPolicyPreviousAttributes.payment_option_limits variant 1

anyOf variant 1: Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money..

- Value shape: Array of [InvoicePaymentOptionLimitPreviousAttributes](../models/InvoicePaymentOptionLimitPreviousAttributes.md#invoicepaymentoptionlimitpreviousattributes). Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: `100`. 

### InvoicePaymentPolicyPreviousAttributes.payment_option_limits variant 2

anyOf variant 2.

- Value shape: null. Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. 

### InvoicePaymentPolicyPreviousAttributes.show_cost_comparison

### InvoicePaymentPolicyPreviousAttributes.show_cost_comparison variant 1

anyOf variant 1: Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay..

- Value shape: boolean. Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. 

### InvoicePaymentPolicyPreviousAttributes.show_cost_comparison variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. 

