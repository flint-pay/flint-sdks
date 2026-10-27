[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionAutomatic

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.

The `automatic` variant of `InvoiceCollection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"automatic"`. |
| `payment_method_id` | Required | (string or null) or null | `payment_method_id`: [declared alternatives](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomaticpayment_method_id). |
| `payment_policy` | Optional | [InvoiceCollectionAutomaticPaymentPolicy](../models/InvoiceCollectionAutomaticPaymentPolicy.md#invoicecollectionautomaticpaymentpolicy) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomaticpayment_policy). |

### InvoiceCollectionAutomatic.payment_method_id

### InvoiceCollectionAutomatic.payment_method_id variant 1

anyOf variant 1.

- Value shape: (string or null).  

### InvoiceCollectionAutomatic.payment_method_id variant 2

anyOf variant 2.

- Value shape: null.  

### InvoiceCollectionAutomatic.payment_policy

Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Field definitions: [shared fields](InvoicePaymentPolicy.md#invoicepaymentpolicy).

