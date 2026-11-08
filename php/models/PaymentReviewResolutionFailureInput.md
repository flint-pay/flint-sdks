[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewResolutionFailureInput

A failed attempt to resolve a review by refund, with the `refund_id` and when it failed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `failed_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refund_id` | Required | string | Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |

