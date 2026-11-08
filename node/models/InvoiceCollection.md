[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollection

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `payment_method_id` | Conditional | Varies by condition | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `payment_policy` | Conditional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceCollection.md#invoicecollectionpayment_policy). |

### InvoiceCollection variant 1: `mode` = `"buyer_initiated"`

oneOf with mode: "buyer_initiated": The `buyer_initiated` variant of `InvoiceCollection`..

- Condition: not (present(`payment_method_id`)).
- Required: `payment_policy`.
- Optional: `payment_method_id`.
- Constraints for `mode`: Values: `"buyer_initiated"`.
- Constraints for `payment_method_id`: string or null.

### InvoiceCollection variant 2: `mode` = `"automatic"`

oneOf with mode: "automatic": The `automatic` variant of `InvoiceCollection`..

- Condition: not (present(`payment_policy`)).
- Required: `payment_method_id`.
- Optional: `payment_policy`.
- Constraints for `mode`: Values: `"automatic"`.
- Constraints for `payment_method_id`: (string or null).

### InvoiceCollection variant 3: `mode` = `"external"`

oneOf with mode: "external": The `external` variant of `InvoiceCollection`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Optional: `payment_method_id`, `payment_policy`.
- Constraints for `mode`: Values: `"external"`.
- Constraints for `payment_method_id`: string or null.

### InvoiceCollection.payment_policy

The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled_payment_options` | Required | Array of string | The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: `5`. uniqueItems: `true`. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_option_limits` | Optional | Array of [InvoicePaymentOptionLimit](../models/InvoicePaymentOptionLimit.md#invoicepaymentoptionlimit) | Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: `100`. `payment_option_limits[]`: [field definitions](../models/InvoiceCollection.md#invoicecollectionpayment_policypayment_option_limits). |
| `show_cost_comparison` | Optional | boolean | Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. |

### InvoiceCollection.payment_policy.payment_option_limits[]

The largest invoice total allowed for a payment option.

Field definitions: [shared fields](InvoicePaymentOptionLimit.md#invoicepaymentoptionlimit).

### InvoiceCollection.payment_policy.payment_option_limits[].max_total_money

The largest invoice total, in this currency, for which Flint offers the option. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

