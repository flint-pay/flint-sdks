[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CollectInvoiceResultInput

The invoice is the primary resource and expected_version target; invoice_payment_attempt records the collection outcome.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice` | Required | [InvoiceInput](../models/InvoiceInput.md#invoiceinput) | A bill issued to a customer. |
| `invoice_payment_attempt` | Required | [InvoicePaymentAttemptInput](../models/InvoicePaymentAttemptInput.md#invoicepaymentattemptinput) or null |  |

