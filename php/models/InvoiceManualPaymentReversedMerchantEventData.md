[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentReversedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [InvoiceManualPaymentReversedMerchantEventDataObject](../models/InvoiceManualPaymentReversedMerchantEventDataObject.md#invoicemanualpaymentreversedmerchanteventdataobject) | A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts. |

