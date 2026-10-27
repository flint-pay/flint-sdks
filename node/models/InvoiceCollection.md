[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollection

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `payment_method_id` | Conditional | string or null |  |
| `payment_policy` | Conditional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

### InvoiceCollection variant 1: `mode` = `"buyer_initiated"`

oneOf variant 1: The `buyer_initiated` variant of `InvoiceCollection`..

- Condition: not (present(`payment_method_id`)).
- Required: `payment_policy`.
- Optional: `payment_method_id`.
- Constraints for `mode`: Values: `"buyer_initiated"`.

### InvoiceCollection variant 2: `mode` = `"automatic"`

oneOf variant 2: The `automatic` variant of `InvoiceCollection`..

- Condition: not (present(`payment_policy`)).
- Required: `payment_method_id`.
- Optional: `payment_policy`.
- Constraints for `mode`: Values: `"automatic"`.

### InvoiceCollection variant 3: `mode` = `"external"`

oneOf variant 3: The `external` variant of `InvoiceCollection`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Optional: `payment_method_id`, `payment_policy`.
- Constraints for `mode`: Values: `"external"`.

