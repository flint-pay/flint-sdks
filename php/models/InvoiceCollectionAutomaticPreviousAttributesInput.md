[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionAutomaticPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Optional | (string or null) | How the invoice is collected, resolved when the draft was written. Values: `"automatic"`. `mode`: [declared alternatives](../models/InvoiceCollectionAutomaticPreviousAttributesInput.md#invoicecollectionautomaticpreviousattributesinputmode). |
| `payment_method_id` | Optional | (string or null) | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. `payment_method_id`: [declared alternatives](../models/InvoiceCollectionAutomaticPreviousAttributesInput.md#invoicecollectionautomaticpreviousattributesinputpayment_method_id). |
| `payment_policy` | Optional | [InvoicePaymentPolicyPreviousAttributesInput](../models/InvoicePaymentPolicyPreviousAttributesInput.md#invoicepaymentpolicypreviousattributesinput) or null | The payment options the hosted invoice page offers. Present only with buyer_initiated. |

### InvoiceCollectionAutomaticPreviousAttributesInput.mode

### InvoiceCollectionAutomaticPreviousAttributesInput.mode variant 1, 3

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 2 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"automatic"`.

### InvoiceCollectionAutomaticPreviousAttributesInput.mode variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionAutomaticPreviousAttributesInput.payment_method_id

### InvoiceCollectionAutomaticPreviousAttributesInput.payment_method_id variant 1, 3

anyOf group 1 variant 1: The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card.; anyOf group 2 variant 1.

- Value shape: string. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### InvoiceCollectionAutomaticPreviousAttributesInput.payment_method_id variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. 

