[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IssueInvoiceRequest

The request body for: Issue invoice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_mode` | Optional | string | merchant_default uses the merchant invoice delivery setting; email sends the invoice to its recipient; caller_managed returns the buyer-access link for you to deliver. Default: `"merchant_default"`. Values: `"merchant_default"`, `"email"`, `"caller_managed"`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

