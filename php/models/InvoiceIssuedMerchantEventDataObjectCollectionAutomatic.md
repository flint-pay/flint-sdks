[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceIssuedMerchantEventDataObjectCollectionAutomatic

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.

The `automatic` variant of `InvoiceCollection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"automatic"`. |
| `payment_method_id` | Required | (string or null) or null | `payment_method_id`: [declared alternatives](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomaticpayment_method_id). |
| `payment_policy` | Optional | [InvoiceIssuedMerchantEventDataObjectCollectionAutomaticPaymentPolicy](../models/InvoiceIssuedMerchantEventDataObjectCollectionAutomaticPaymentPolicy.md#invoiceissuedmerchanteventdataobjectcollectionautomaticpaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceIssuedMerchantEventDataObjectCollectionAutomatic.md#invoiceissuedmerchanteventdataobjectcollectionautomaticpayment_policy). |

### InvoiceIssuedMerchantEventDataObjectCollectionAutomatic.payment_method_id

Declared alternatives: [InvoiceCollectionAutomatic.payment_method_id](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomaticpayment_method_id).

### InvoiceIssuedMerchantEventDataObjectCollectionAutomatic.payment_policy

The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Field definitions: [shared fields](InvoicePaymentPolicy.md#invoicepaymentpolicy).

