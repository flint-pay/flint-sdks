[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CollectInvoiceResult

The invoice is the primary resource and expected_version target; invoice_payment_attempt records the collection outcome.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | A bill issued to a customer. `invoice`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoice). |
| `invoice_payment_attempt` | Required | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) or null |  |

### CollectInvoiceResult.invoice

Field definitions: [CollectInvoiceResponse.data.invoice](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoice).

