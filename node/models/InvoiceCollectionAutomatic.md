[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionAutomatic

The `automatic` variant of `InvoiceCollection`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"automatic"`. |
| `payment_method_id` | Required | (string or null) | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceCollection.md#invoicecollectionpayment_policy). |

### InvoiceCollectionAutomatic.payment_policy

Field definitions: [InvoiceCollection.payment_policy](../models/InvoiceCollection.md#invoicecollectionpayment_policy).

