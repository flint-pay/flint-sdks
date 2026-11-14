[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceManualPaymentResultInput

The recorded or reversed payment and the updated invoice. expected_invoice_version on create and expected_version on reversal fence the invoice; use the returned invoice version for the next write.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice` | Required | [InvoiceInput](../models/InvoiceInput.md#invoiceinput) | The invoice with balances and supported_actions after this request. A bill issued to a customer. |
| `invoice_manual_payment` | Required | [InvoiceManualPaymentInput](../models/InvoiceManualPaymentInput.md#invoicemanualpaymentinput) | The offline payment recorded or reversed by this request. A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was written off. A payment can cover principal and late fees. Manual payments are separate from online payment attempts. |

