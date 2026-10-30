[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCreatedMerchantEventDataObjectCollectionAutomatic

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.

The `automatic` variant of `InvoiceCollection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"automatic"`. |
| `payment_method_id` | Required | (string or null) or null | `payment_method_id`: [declared alternatives](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomaticpayment_method_id). |
| `payment_policy` | Optional | [InvoiceCreatedMerchantEventDataObjectCollectionAutomaticPaymentPolicy](../models/InvoiceCreatedMerchantEventDataObjectCollectionAutomaticPaymentPolicy.md#invoicecreatedmerchanteventdataobjectcollectionautomaticpaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceCreatedMerchantEventDataObjectCollectionAutomatic.md#invoicecreatedmerchanteventdataobjectcollectionautomaticpayment_policy). |

### InvoiceCreatedMerchantEventDataObjectCollectionAutomatic.payment_method_id

Declared alternatives: [InvoiceCollectionAutomatic.payment_method_id](../models/InvoiceCollectionAutomatic.md#invoicecollectionautomaticpayment_method_id).

### InvoiceCreatedMerchantEventDataObjectCollectionAutomatic.payment_policy

The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Field definitions: [shared fields](InvoicePaymentPolicy.md#invoicepaymentpolicy).

