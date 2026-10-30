[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollection

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `payment_method_id` | Conditional | Varies by condition | The saved card Flint charges. Present only with automatic. On a draft, null means Flint charges the customer's default card, selected at issue. After issue it is the selected card. |
| `payment_policy` | Conditional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

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

