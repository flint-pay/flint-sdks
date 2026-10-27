[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceCheckoutSessionResultInput

The invoice is the primary resource, with its checkout session, credential, and any invoice payment attempt.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_auth_token` | Required | string |  |
| `checkout_session` | Required | [BuyerCheckoutSessionInput](../models/BuyerCheckoutSessionInput.md#buyercheckoutsessioninput) | A session in which a buyer completes an order's payment. |
| `invoice` | Required | [BuyerInvoiceInput](../models/BuyerInvoiceInput.md#buyerinvoiceinput) | A bill issued to a customer. |
| `invoice_payment_attempt` | Optional | [InvoicePaymentAttemptInput](../models/InvoicePaymentAttemptInput.md#invoicepaymentattemptinput) | An attempt to collect payment for an invoice. |

