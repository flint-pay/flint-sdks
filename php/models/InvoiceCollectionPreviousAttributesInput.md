[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Optional | (string or null) | How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/InvoiceCollectionPreviousAttributesInput.md#invoicecollectionpreviousattributesinput-variant-1mode), [declared alternatives](../models/InvoiceCollectionPreviousAttributesInput.md#invoicecollectionpreviousattributesinput-variant-2mode), [declared alternatives](../models/InvoiceCollectionPreviousAttributesInput.md#invoicecollectionpreviousattributesinput-variant-3mode). |
| `payment_method_id` | Optional | Varies by condition | The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. `payment_method_id`: [declared alternatives](../models/InvoiceCollectionBuyerInitiatedPreviousAttributesInput.md#invoicecollectionbuyerinitiatedpreviousattributesinputpayment_method_id), [declared alternatives](../models/InvoiceCollectionAutomaticPreviousAttributesInput.md#invoicecollectionautomaticpreviousattributesinputpayment_method_id). |
| `payment_policy` | Optional | [InvoicePaymentPolicyPreviousAttributesInput](../models/InvoicePaymentPolicyPreviousAttributesInput.md#invoicepaymentpolicypreviousattributesinput) or null | The payment options the hosted invoice page offers. Present only with buyer_initiated. |

### InvoiceCollectionPreviousAttributesInput variant 1: `mode` = `"buyer_initiated"`

anyOf InvoiceCollectionBuyerInitiatedPreviousAttributes.

- Constraints for `mode`: Values: `"buyer_initiated"`.
- Constraints for `payment_method_id`: string or null or null.

### InvoiceCollectionPreviousAttributesInput variant 2: `mode` = `"automatic"`

anyOf InvoiceCollectionAutomaticPreviousAttributes.

- Constraints for `mode`: Values: `"automatic"`.
- Constraints for `payment_method_id`: (string or null or null).

### InvoiceCollectionPreviousAttributesInput variant 3: `mode` = `"external"`

anyOf InvoiceCollectionExternalPreviousAttributes.

- Constraints for `mode`: Values: `"external"`.
- Constraints for `payment_method_id`: string or null or null.

### InvoiceCollectionPreviousAttributesInput variant 1.mode

### InvoiceCollectionPreviousAttributesInput variant 1.mode variant 1

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written..

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`.

### InvoiceCollectionPreviousAttributesInput variant 1.mode variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionPreviousAttributesInput variant 1.mode variant 3, 5

anyOf group 2 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 3 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`.

### InvoiceCollectionPreviousAttributesInput variant 1.payment_method_id

Declared alternatives: [InvoiceCollectionBuyerInitiatedPreviousAttributesInput.payment_method_id](../models/InvoiceCollectionBuyerInitiatedPreviousAttributesInput.md#invoicecollectionbuyerinitiatedpreviousattributesinputpayment_method_id).

### InvoiceCollectionPreviousAttributesInput variant 2.mode

### InvoiceCollectionPreviousAttributesInput variant 2.mode variant 1

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written..

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`.

### InvoiceCollectionPreviousAttributesInput variant 2.mode variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionPreviousAttributesInput variant 2.mode variant 3, 5

anyOf group 2 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 3 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"automatic"`.

### InvoiceCollectionPreviousAttributesInput variant 2.payment_method_id

Declared alternatives: [InvoiceCollectionAutomaticPreviousAttributesInput.payment_method_id](../models/InvoiceCollectionAutomaticPreviousAttributesInput.md#invoicecollectionautomaticpreviousattributesinputpayment_method_id).

### InvoiceCollectionPreviousAttributesInput variant 3.mode

### InvoiceCollectionPreviousAttributesInput variant 3.mode variant 1

anyOf group 1 variant 1: How the invoice is collected, resolved when the draft was written..

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`, `"automatic"`, `"external"`.

### InvoiceCollectionPreviousAttributesInput variant 3.mode variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the invoice is collected, resolved when the draft was written. 

### InvoiceCollectionPreviousAttributesInput variant 3.mode variant 3, 5

anyOf group 2 variant 1: How the invoice is collected, resolved when the draft was written.; anyOf group 3 variant 1.

- Value shape: string. How the invoice is collected, resolved when the draft was written. Values: `"external"`.

### InvoiceCollectionPreviousAttributesInput variant 3.payment_method_id

Declared alternatives: [InvoiceCollectionBuyerInitiatedPreviousAttributesInput.payment_method_id](../models/InvoiceCollectionBuyerInitiatedPreviousAttributesInput.md#invoicecollectionbuyerinitiatedpreviousattributesinputpayment_method_id).

