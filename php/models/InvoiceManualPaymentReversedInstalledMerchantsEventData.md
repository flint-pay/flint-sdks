[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentReversedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [InvoiceManualPaymentReversedInstalledMerchantsEventDataObject](../models/InvoiceManualPaymentReversedInstalledMerchantsEventDataObject.md#invoicemanualpaymentreversedinstalledmerchantseventdataobject) | A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts. |

