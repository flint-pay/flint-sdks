[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceCheckoutSessionResult

The invoice is the primary resource, with its checkout session and any invoice payment attempt. Hosted launches return checkout_session.url; embedded launches return checkout_auth_token.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_auth_token` | Optional | string | Checkout credential for embedded launches. Send it as Authorization: Bearer &lt;checkout_auth_token>. Omitted for hosted launches, which return checkout_session.url instead. |
| `checkout_session` | Required | [BuyerCheckoutSession](../models/BuyerCheckoutSession.md#buyercheckoutsession) | The checkout session created to collect the invoice or selected schedule entry. A session in which a buyer completes an order's payment. |
| `invoice` | Required | [BuyerInvoice](../models/BuyerInvoice.md#buyerinvoice) | The invoice the checkout session collects, with its current balance. A bill issued to a customer. |
| `invoice_payment_attempt` | Optional | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | The invoice payment attempt started for this checkout session. An attempt to collect payment for an invoice. |

