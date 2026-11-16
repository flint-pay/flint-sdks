[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionExternalPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Optional | (string or null) | How the invoice is collected, resolved when the draft was written. Values: `"external"`. `mode`: [declared alternatives](../models/InvoiceCollectionExternalPreviousAttributes.md#invoicecollectionexternalpreviousattributesmode). |
| `payment_method_id` | Optional | string or null or null | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. `payment_method_id`: [declared alternatives](../models/InvoiceCollectionBuyerInitiatedPreviousAttributes.md#invoicecollectionbuyerinitiatedpreviousattributespayment_method_id). |
| `payment_policy` | Optional | [InvoicePaymentPolicyPreviousAttributes](../models/InvoicePaymentPolicyPreviousAttributes.md#invoicepaymentpolicypreviousattributes) or null | The payment options the hosted invoice page offers. Present only with buyer_initiated. |

### InvoiceCollectionExternalPreviousAttributes.mode

### InvoiceCollectionExternalPreviousAttributes.mode variant 1, 3

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 2 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"external"`.

### InvoiceCollectionExternalPreviousAttributes.mode variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionExternalPreviousAttributes.payment_method_id

Declared alternatives: [InvoiceCollectionBuyerInitiatedPreviousAttributes.payment_method_id](../models/InvoiceCollectionBuyerInitiatedPreviousAttributes.md#invoicecollectionbuyerinitiatedpreviousattributespayment_method_id).

