[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentPolicy







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Required | Array of string | The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: `5`. uniqueItems: `true`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_option_limits` | Optional | Array of [InvoicePaymentOptionLimit](../models/InvoicePaymentOptionLimit.md#invoicepaymentoptionlimit) | Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: `100`. `payment_option_limits[]`: [field definitions](../models/InvoiceCollection.md#invoicecollectionpayment_policypayment_option_limits), [field definitions](../models/InvoiceCollectionExternal.md#invoicecollectionexternal-variant-2payment_policypayment_option_limits). |
| `show_cost_comparison` | Optional | boolean | Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. |

### InvoicePaymentPolicy variant 1

anyOf variant 1: Declared schema InvoicePaymentPolicy. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison..

No additional constraints.

### InvoicePaymentPolicy variant 2

anyOf variant 2: Declared schema InvoicePaymentPolicyRequest. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison..

No additional constraints.

### InvoicePaymentPolicy variant 1.payment_option_limits[]

Field definitions: [InvoiceCollection.payment_policy.payment_option_limits[]](../models/InvoiceCollection.md#invoicecollectionpayment_policypayment_option_limits).

### InvoicePaymentPolicy variant 2.payment_option_limits[]

Field definitions: [InvoiceCollectionExternal variant 2.payment_policy.payment_option_limits[]](../models/InvoiceCollectionExternal.md#invoicecollectionexternal-variant-2payment_policypayment_option_limits).

