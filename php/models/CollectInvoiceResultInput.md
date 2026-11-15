[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CollectInvoiceResultInput

The invoice is the primary resource and expected_version target; invoice_payment_attempt records the collection outcome.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `invoice` | Required | [InvoiceInput](../models/InvoiceInput.md#invoiceinput) | The invoice as it stands after this collection request. Send its `version` as `expected_version` on later invoice writes. A bill issued to a customer. |
| `invoice_payment_attempt` | Required | [InvoicePaymentAttemptInput](../models/InvoicePaymentAttemptInput.md#invoicepaymentattemptinput) | The invoice payment attempt this collect request started or reused. A repeat of the same request returns the existing attempt. Read its `status` to follow the charge. An attempt to collect payment for an invoice. |

