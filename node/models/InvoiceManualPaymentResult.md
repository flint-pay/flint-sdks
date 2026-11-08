[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentResult

The recorded or reversed payment and the updated invoice. expected_version on either write fences the invoice; use the returned invoice version for the next write.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | The invoice with balances and supported_actions after this request. A bill issued to a customer. |
| `invoice_manual_payment` | Required | [InvoiceManualPayment](../models/InvoiceManualPayment.md#invoicemanualpayment) | The offline payment recorded or reversed by this request. A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was written off. A payment can cover principal and late fees. Manual payments are separate from online payment attempts. |

