[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionExternal







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"external"`. |
| `payment_method_id` | Optional | string or null | Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | `payment_policy`: [field definitions](../models/InvoiceCollection.md#invoicecollectionpayment_policy), [field definitions](../models/InvoiceCollectionExternal.md#invoicecollectionexternal-variant-2payment_policy). |

### InvoiceCollectionExternal variant 1: `mode` = `"external"`

anyOf InvoiceCollectionExternal: Declared schema InvoiceCollectionExternal. The `external` variant of `InvoiceCollection`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Constraints for `mode`: How the invoice is collected, resolved when the draft was written. Values: `"external"`.
- Constraints for `payment_method_id`: The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card.
- Constraints for `payment_policy`: The payment options the hosted invoice page offers. Present only with buyer_initiated.

### InvoiceCollectionExternal variant 2: `mode` = `"external"`

anyOf InvoiceCollectionInputExternal: Declared schema InvoiceCollectionInputExternal. The `external` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Constraints for `mode`: How the invoice is collected. merchant_default resolves when the draft is written, and reads return the resolved mode. Values: `"external"`.
- Constraints for `payment_method_id`: The customer's saved card to charge. Accepted only with automatic. Without one, Flint charges the customer's default card, selected when the invoice is issued. Send null to clear it. minLength: `1`.
- Constraints for `payment_policy`: The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit it to use the invoice settings payment_policy, or the checkout payment options when that isn't set.

### InvoiceCollectionExternal variant 1.payment_policy

Field definitions: [InvoiceCollection.payment_policy](../models/InvoiceCollection.md#invoicecollectionpayment_policy).

### InvoiceCollectionExternal variant 2.payment_policy

The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit it to use the invoice settings payment_policy, or the checkout payment options when that isn't set. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Required | Array of string | The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: `5`. uniqueItems: `true`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_option_limits` | Optional | Array of [InvoicePaymentOptionLimit](../models/InvoicePaymentOptionLimit.md#invoicepaymentoptionlimit) | Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: `100`. `payment_option_limits[]`: [field definitions](../models/InvoiceCollectionExternal.md#invoicecollectionexternal-variant-2payment_policypayment_option_limits). |
| `show_cost_comparison` | Optional | boolean | Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. |

### InvoiceCollectionExternal variant 2.payment_policy.payment_option_limits[]

The largest invoice total allowed for a payment option.

Field definitions: [shared fields](InvoicePaymentOptionLimit.md#invoicepaymentoptionlimit).

### InvoiceCollectionExternal variant 2.payment_policy.payment_option_limits[].max_total_money

Field definitions: [InvoiceCollection.payment_policy.payment_option_limits[].max_total_money](../models/InvoiceCollection.md#invoicecollectionpayment_policypayment_option_limitsmax_total_money).

