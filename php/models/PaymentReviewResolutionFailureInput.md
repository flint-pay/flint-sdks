[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewResolutionFailureInput

A failed attempt to resolve a review by refund, with the `refund_id` and when it failed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `failed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `refund_id` | Required | string |  |

