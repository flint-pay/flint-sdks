[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentResult

The recorded or reversed payment and the updated invoice. expected_version on either write fences the invoice; use the returned invoice version for the next write.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | A bill issued to a customer. |
| `invoice_manual_payment` | Required | [InvoiceManualPayment](../models/InvoiceManualPayment.md#invoicemanualpayment) | A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts. |

