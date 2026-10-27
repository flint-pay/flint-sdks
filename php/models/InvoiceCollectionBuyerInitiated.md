[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCollectionBuyerInitiated

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.

The `buyer_initiated` variant of `InvoiceCollection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | Values: `"buyer_initiated"`. |
| `payment_method_id` | Optional | (string or null) or null | `payment_method_id`: [declared alternatives](../models/InvoiceCollectionBuyerInitiated.md#invoicecollectionbuyerinitiatedpayment_method_id). |
| `payment_policy` | Required | [InvoiceCollectionBuyerInitiatedPaymentPolicy](../models/InvoiceCollectionBuyerInitiatedPaymentPolicy.md#invoicecollectionbuyerinitiatedpaymentpolicy) | Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceCollectionBuyerInitiated.md#invoicecollectionbuyerinitiatedpayment_policy). |

### InvoiceCollectionBuyerInitiated.payment_method_id

### InvoiceCollectionBuyerInitiated.payment_method_id variant 1

anyOf variant 1.

- Value shape: (string or null).  

### InvoiceCollectionBuyerInitiated.payment_method_id variant 2

anyOf variant 2.

- Value shape: null.  

### InvoiceCollectionBuyerInitiated.payment_policy

Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Field definitions: [shared fields](InvoicePaymentPolicy.md#invoicepaymentpolicy).

