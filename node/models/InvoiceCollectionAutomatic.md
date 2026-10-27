[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionAutomatic

The `automatic` variant of `InvoiceCollection`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"automatic"`. |
| `payment_method_id` | Required | (string or null) | The saved card Flint charges. Present only with automatic. On a draft, null means Flint charges the customer's default card, selected at issue. After issue it is the selected card. |
| `payment_policy` | Optional | [InvoicePaymentPolicy](../models/InvoicePaymentPolicy.md#invoicepaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. |

