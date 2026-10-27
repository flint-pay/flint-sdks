[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBuyerInitiated

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.

The `buyer_initiated` variant of `InvoiceCollection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"buyer_initiated"`. |
| `payment_method_id` | Optional | (string or null) or null | `payment_method_id`: [declared alternatives](../models/InvoiceCollectionBuyerInitiated.md#invoicecollectionbuyerinitiatedpayment_method_id). |
| `payment_policy` | Required | [InvoiceCollectionBuyerInitiatedPaymentPolicy](../models/InvoiceCollectionBuyerInitiatedPaymentPolicy.md#invoicecollectionbuyerinitiatedpaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceCollectionBuyerInitiated.md#invoicecollectionbuyerinitiatedpayment_policy). |

### InvoiceCollectionBuyerInitiated.payment_method_id

### InvoiceCollectionBuyerInitiated.payment_method_id variant 1

anyOf variant 1.

- Value shape: (string or null). The saved card Flint charges. Present only with automatic. On a draft, null means Flint charges the customer's default card, selected at issue. After issue it is the selected card. 

### InvoiceCollectionBuyerInitiated.payment_method_id variant 2

anyOf variant 2.

- Value shape: null.  

### InvoiceCollectionBuyerInitiated.payment_policy

The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Field definitions: [shared fields](InvoicePaymentPolicy.md#invoicepaymentpolicy).

