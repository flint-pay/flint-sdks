[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionAutomatic

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.

The `automatic` variant of `InvoiceCollection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"automatic"`. |
| `payment_method_id` | Required | (string or null) or null | `payment_method_id`: [declared alternatives](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomaticpayment_method_id). |
| `payment_policy` | Optional | [InvoiceCollectionAutomaticPaymentPolicy](../models/InvoiceCollectionAutomaticPaymentPolicy.md#invoicecollectionautomaticpaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomaticpayment_policy). |

### InvoiceCollectionAutomatic.payment_method_id

### InvoiceCollectionAutomatic.payment_method_id variant 1

anyOf variant 1.

- Value shape: (string or null). The saved card Flint charges. Present only with automatic. On a draft, null means Flint charges the customer's default card, selected at issue. After issue it is the selected card. 

### InvoiceCollectionAutomatic.payment_method_id variant 2

anyOf variant 2.

- Value shape: null.  

### InvoiceCollectionAutomatic.payment_policy

The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Field definitions: [shared fields](InvoicePaymentPolicy.md#invoicepaymentpolicy).

