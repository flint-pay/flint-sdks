[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionExternal







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"external"`. |
| `payment_method_id` | Optional | string or null |  |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

### InvoiceCollectionExternal variant 1: `mode` = `"external"`

anyOf InvoiceCollectionExternal: Declared schema InvoiceCollectionExternal. The `external` variant of `InvoiceCollection`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Constraints for `mode`: How the invoice is collected, resolved when the draft was written. Values: `"external"`.
- Constraints for `payment_method_id`: The saved card Flint charges. Present only with automatic. On a draft, null means Flint charges the customer's default card, selected at issue. After issue it is the selected card.
- Constraints for `payment_policy`: The payment options the hosted invoice page offers. Present only with buyer_initiated.

### InvoiceCollectionExternal variant 2: `mode` = `"external"`

anyOf InvoiceCollectionInputExternal: Declared schema InvoiceCollectionInputExternal. The `external` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Constraints for `mode`: How the invoice is collected. merchant_default resolves when the draft is written, and reads return the resolved mode. Values: `"external"`.
- Constraints for `payment_method_id`: The customer's saved card to charge. Accepted only with automatic. Without one, Flint charges the customer's default card, selected when the invoice is issued. Send null to clear it. minLength: `1`.
- Constraints for `payment_policy`: The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit it to use the invoice settings payment_policy, or the checkout payment options when that isn't set.

