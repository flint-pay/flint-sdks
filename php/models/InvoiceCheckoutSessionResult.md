[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCheckoutSessionResult

The invoice is the primary resource, with its checkout session, credential, and any invoice payment attempt.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_auth_token` | Required | string |  |
| `checkout_session` | Required | [CheckoutSession](../models/CheckoutSession.md#checkoutsession) | A session in which a buyer completes an order's payment. |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | A bill issued to a customer. |
| `invoice_payment_attempt` | Optional | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | An attempt to collect payment for an invoice. |

