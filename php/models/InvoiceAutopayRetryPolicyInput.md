[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceAutopayRetryPolicyInput

When to retry a failed automatic invoice payment, as a list of day offsets.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `retry_day_offsets` | Required | Array of integer | maxItems: `5`. uniqueItems: `true`. Items: Format: `int32`. minimum: `1`. maximum: `30`. |

