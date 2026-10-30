[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionRequest

How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected. merchant_default resolves when the draft is written, and reads return the resolved mode. Values: `"merchant_default"`, `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `payment_method_id` | Optional | string or null | The customer's saved card to charge. Accepted only with automatic. Without one, Flint charges the customer's default card, selected when the invoice is issued. Send null to clear it. minLength: `1`. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit it to use the invoice settings payment_policy, or the checkout payment options when that isn't set. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

### InvoiceCollectionRequest variant 1: `mode` = `"merchant_default"`

oneOf with mode: "merchant_default": The `merchant_default` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Constraints for `mode`: Values: `"merchant_default"`.

### InvoiceCollectionRequest variant 2: `mode` = `"buyer_initiated"`

oneOf with mode: "buyer_initiated": The `buyer_initiated` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_method_id`))).
- Constraints for `mode`: Values: `"buyer_initiated"`.

### InvoiceCollectionRequest variant 3: `mode` = `"automatic"`

oneOf with mode: "automatic": The `automatic` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_policy`))).
- Constraints for `mode`: Values: `"automatic"`.

### InvoiceCollectionRequest variant 4: `mode` = `"external"`

oneOf with mode: "external": The `external` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Constraints for `mode`: Values: `"external"`.

