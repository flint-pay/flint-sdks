[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionAutomaticPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Optional | (string or null) | How the invoice is collected, resolved when the draft was written. Values: `"automatic"`. `mode`: [declared alternatives](../models/InvoiceCollectionAutomaticPreviousAttributes.md#invoicecollectionautomaticpreviousattributesmode). |
| `payment_method_id` | Optional | (string or null) | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. `payment_method_id`: [declared alternatives](../models/InvoiceCollectionAutomaticPreviousAttributes.md#invoicecollectionautomaticpreviousattributespayment_method_id). |
| `payment_policy` | Optional | [InvoicePaymentPolicyPreviousAttributes](../models/InvoicePaymentPolicyPreviousAttributes.md#invoicepaymentpolicypreviousattributes) or null | The payment options the hosted invoice page offers. Present only with buyer_initiated. |

### InvoiceCollectionAutomaticPreviousAttributes.mode

### InvoiceCollectionAutomaticPreviousAttributes.mode variant 1, 3

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 2 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"automatic"`.

### InvoiceCollectionAutomaticPreviousAttributes.mode variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionAutomaticPreviousAttributes.payment_method_id

### InvoiceCollectionAutomaticPreviousAttributes.payment_method_id variant 1, 3

anyOf group 1 variant 1: The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card.; anyOf group 2 variant 1.

- Value shape: string. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### InvoiceCollectionAutomaticPreviousAttributes.payment_method_id variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. 

