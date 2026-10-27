[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceIssueRequestInput

Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_mode` | Optional | string | merchant_default uses the merchant invoice delivery setting; email sends the invoice to its recipient; caller_managed returns the buyer-access link for you to deliver. Default: `"merchant_default"`. Values: `"merchant_default"`, `"email"`, `"caller_managed"`. |

