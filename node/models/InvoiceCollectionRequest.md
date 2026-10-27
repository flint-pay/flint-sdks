[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionRequest

How an invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved payment method, and a payment policy.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | merchant_default resolves the merchant setting at write time. Reads return the resolved mode. Values: `"merchant_default"`, `"buyer_initiated"`, `"automatic"`, `"external"`. |
| `payment_method_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

### InvoiceCollectionRequest variant 1: `mode` = `"merchant_default"`

oneOf variant 1: The `merchant_default` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Constraints for `mode`: Values: `"merchant_default"`.

### InvoiceCollectionRequest variant 2: `mode` = `"buyer_initiated"`

oneOf variant 2: The `buyer_initiated` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_method_id`))).
- Constraints for `mode`: Values: `"buyer_initiated"`.

### InvoiceCollectionRequest variant 3: `mode` = `"automatic"`

oneOf variant 3: The `automatic` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_policy`))).
- Constraints for `mode`: Values: `"automatic"`.

### InvoiceCollectionRequest variant 4: `mode` = `"external"`

oneOf variant 4: The `external` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Constraints for `mode`: Values: `"external"`.

