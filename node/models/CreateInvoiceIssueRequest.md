[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceIssueRequest

Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_mode` | Optional | string | How the invoice reaches its recipient. Omit it to use merchant_default. Default: `"merchant_default"`. Values: `"merchant_default"`, `"email"`, `"caller_managed"`. |

