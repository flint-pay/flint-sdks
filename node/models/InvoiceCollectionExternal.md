[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionExternal







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"external"`. |
| `payment_method_id` | Optional | string or null |  |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

### InvoiceCollectionExternal variant 1: `mode` = `"external"`

anyOf variant 1: Declared schema InvoiceCollectionExternal. The `external` variant of `InvoiceCollection`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).

### InvoiceCollectionExternal variant 2: `mode` = `"external"`

anyOf variant 2: Declared schema InvoiceCollectionInputExternal. The `external` variant of `InvoiceCollectionInput`..

- Condition: not (at least one(present(`payment_method_id`); present(`payment_policy`))).
- Constraints for `mode`: merchant_default resolves the merchant setting at write time. Reads return the resolved mode. Values: `"external"`.
- Constraints for `payment_method_id`: Send null to clear it. minLength: `1`.

