[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IssueInvoiceRequest

The request body for: Issue invoice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_mode` | Optional | string | How the invoice reaches its recipient. Omit it to use merchant_default. Default: `"merchant_default"`. Values: `"merchant_default"`, `"email"`, `"caller_managed"`. |
| `expected_version` | Optional | integer string | Invoice version last read. Optional; a stale version returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

