[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceCheckoutSessionResultInput

The invoice is the primary resource, with its checkout session and any invoice payment attempt. Hosted launches return checkout_session.url; embedded launches return checkout_auth_token.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_auth_token` | Optional | string | Checkout credential for embedded launches. Send it as Authorization: Bearer &lt;checkout_auth_token>. Omitted for hosted launches, which return checkout_session.url instead. |
| `checkout_session` | Required | [BuyerCheckoutSessionInput](../models/BuyerCheckoutSessionInput.md#buyercheckoutsessioninput) | The checkout session created to collect the invoice or selected schedule entry. A session in which a buyer completes an order's payment. |
| `invoice` | Required | [BuyerInvoiceInput](../models/BuyerInvoiceInput.md#buyerinvoiceinput) | The invoice the checkout session collects, with its current balance. A bill issued to a customer. |
| `invoice_payment_attempt` | Optional | [InvoicePaymentAttemptInput](../models/InvoicePaymentAttemptInput.md#invoicepaymentattemptinput) | The invoice payment attempt started for this checkout session. An attempt to collect payment for an invoice. |

