[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceCheckoutSessionResult

The invoice is the primary resource, with its checkout session, credential, and any invoice payment attempt.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_auth_token` | Required | string |  |
| `checkout_session` | Required | [BuyerCheckoutSession](../models/BuyerCheckoutSession.md#buyercheckoutsession) | A session in which a buyer completes an order's payment. |
| `invoice` | Required | [BuyerInvoice](../models/BuyerInvoice.md#buyerinvoice) | A bill issued to a customer. |
| `invoice_payment_attempt` | Optional | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | An attempt to collect payment for an invoice. |

