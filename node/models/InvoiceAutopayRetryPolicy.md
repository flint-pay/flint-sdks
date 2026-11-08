[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceAutopayRetryPolicy

When to retry a failed automatic invoice payment, as a list of day offsets.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `retry_day_offsets` | Required | Array of integer | Days after the due date to retry, from 1 to 30, in strictly increasing order, at most 5. maxItems: `5`. uniqueItems: `true`. Items: Format: `int32`. minimum: `1`. maximum: `30`. |

