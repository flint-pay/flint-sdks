[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkResolvePrefillRequestInput

Request input. Response: [SendOrderReceiptRequest](../models/SendOrderReceiptRequest.md#sendorderreceiptrequest).

Buyer-editable email prefill for payment-link checkout. It never identifies a customer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Email to fill in for the buyer, who can change it. It is not verified, so it never links the purchase to an existing customer. Format: `email`. minLength: `1`. maxLength: `320`. Example: `"buyer@example.com"`. |

