[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Optional | (string or null) | How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/InvoiceCollectionPreviousAttributes.md#invoicecollectionpreviousattributes-variant-1mode), [declared alternatives](../models/InvoiceCollectionPreviousAttributes.md#invoicecollectionpreviousattributes-variant-2mode), [declared alternatives](../models/InvoiceCollectionPreviousAttributes.md#invoicecollectionpreviousattributes-variant-3mode). |
| `payment_method_id` | Optional | Varies by condition | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. `payment_method_id`: [declared alternatives](../models/InvoiceCollectionBuyerInitiatedPreviousAttributes.md#invoicecollectionbuyerinitiatedpreviousattributespayment_method_id), [declared alternatives](../models/InvoiceCollectionAutomaticPreviousAttributes.md#invoicecollectionautomaticpreviousattributespayment_method_id). |
| `payment_policy` | Optional | [InvoicePaymentPolicyPreviousAttributes](../models/InvoicePaymentPolicyPreviousAttributes.md#invoicepaymentpolicypreviousattributes) or null | The payment options the hosted invoice page offers. Present only with buyer_initiated. |

### InvoiceCollectionPreviousAttributes variant 1: `mode` = `"buyer_initiated"`

anyOf InvoiceCollectionBuyerInitiatedPreviousAttributes.

- Constraints for `mode`: Values: `"buyer_initiated"`.
- Constraints for `payment_method_id`: string or null or null.

### InvoiceCollectionPreviousAttributes variant 2: `mode` = `"automatic"`

anyOf InvoiceCollectionAutomaticPreviousAttributes.

- Constraints for `mode`: Values: `"automatic"`.
- Constraints for `payment_method_id`: (string or null or null).

### InvoiceCollectionPreviousAttributes variant 3: `mode` = `"external"`

anyOf InvoiceCollectionExternalPreviousAttributes.

- Constraints for `mode`: Values: `"external"`.
- Constraints for `payment_method_id`: string or null or null.

### InvoiceCollectionPreviousAttributes variant 1.mode

### InvoiceCollectionPreviousAttributes variant 1.mode variant 1

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written..

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`.

### InvoiceCollectionPreviousAttributes variant 1.mode variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionPreviousAttributes variant 1.mode variant 3, 5

anyOf group 2 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 3 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`.

### InvoiceCollectionPreviousAttributes variant 1.payment_method_id

Declared alternatives: [InvoiceCollectionBuyerInitiatedPreviousAttributes.payment_method_id](../models/InvoiceCollectionBuyerInitiatedPreviousAttributes.md#invoicecollectionbuyerinitiatedpreviousattributespayment_method_id).

### InvoiceCollectionPreviousAttributes variant 2.mode

### InvoiceCollectionPreviousAttributes variant 2.mode variant 1

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written..

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`.

### InvoiceCollectionPreviousAttributes variant 2.mode variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionPreviousAttributes variant 2.mode variant 3, 5

anyOf group 2 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 3 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"automatic"`.

### InvoiceCollectionPreviousAttributes variant 2.payment_method_id

Declared alternatives: [InvoiceCollectionAutomaticPreviousAttributes.payment_method_id](../models/InvoiceCollectionAutomaticPreviousAttributes.md#invoicecollectionautomaticpreviousattributespayment_method_id).

### InvoiceCollectionPreviousAttributes variant 3.mode

### InvoiceCollectionPreviousAttributes variant 3.mode variant 1

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written..

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`.

### InvoiceCollectionPreviousAttributes variant 3.mode variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionPreviousAttributes variant 3.mode variant 3, 5

anyOf group 2 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 3 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"external"`.

### InvoiceCollectionPreviousAttributes variant 3.payment_method_id

Declared alternatives: [InvoiceCollectionBuyerInitiatedPreviousAttributes.payment_method_id](../models/InvoiceCollectionBuyerInitiatedPreviousAttributes.md#invoicecollectionbuyerinitiatedpreviousattributespayment_method_id).

