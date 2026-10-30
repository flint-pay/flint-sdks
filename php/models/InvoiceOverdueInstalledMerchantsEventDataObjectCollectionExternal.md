[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceOverdueInstalledMerchantsEventDataObjectCollectionExternal

The invoice collection policy resolved at write time. The object can be sent back when updating a draft.

The `external` variant of `InvoiceCollection`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `mode` | Required | string | How the invoice is collected, resolved when the draft was written. Values: `"external"`. |
| `payment_method_id` | Optional | (string or null) or null | `payment_method_id`: [declared alternatives](../models/InvoiceCollectionBuyerInitiated.md#invoicecollectionbuyerinitiatedpayment_method_id). |
| `payment_policy` | Optional | [InvoiceOverdueInstalledMerchantsEventDataObjectCollectionExternalPaymentPolicy](../models/InvoiceOverdueInstalledMerchantsEventDataObjectCollectionExternalPaymentPolicy.md#invoiceoverdueinstalledmerchantseventdataobjectcollectionexternalpaymentpolicy) | The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison. `payment_policy`: [field definitions](../models/InvoiceOverdueInstalledMerchantsEventDataObjectCollectionExternal.md#invoiceoverdueinstalledmerchantseventdataobjectcollectionexternalpayment_policy). |

### InvoiceOverdueInstalledMerchantsEventDataObjectCollectionExternal.payment_method_id

Declared alternatives: [InvoiceCollectionBuyerInitiated.payment_method_id](../models/InvoiceCollectionBuyerInitiated.md#invoicecollectionbuyerinitiatedpayment_method_id).

### InvoiceOverdueInstalledMerchantsEventDataObjectCollectionExternal.payment_policy

The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.

Field definitions: [shared fields](InvoicePaymentPolicy.md#invoicepaymentpolicy).

