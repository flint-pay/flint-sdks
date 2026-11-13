[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequest

A request to delete a customer's personal information.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_subscription_ids` | Required | Array of string | Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. Items: Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `customer_deletion_request_id` | Required | string | Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. Example: `"cdel_01KEZF7C009P94WEXW5RMRFXAY"`. |
| `customer_id` | Required | string | ID of the customer the request would erase. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `decided_at` | Required | string or null | Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `decision_reason` | Required | string or null | Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased. |
| `removed_payment_method_ids` | Required | Array of string | Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. Items: Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `requested_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `requested_by` | Required | string or null | Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. Values: `"buyer"`, `"merchant"`, `null`. |
| `resolved_at` | Optional | string | Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `response_due_at` | Required | string | Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `retention_policy` | Required | string | What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Values: `"retain_required_commerce_records"`. |
| `status` | Required | string | Where the request is in review and erasure. Values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, when retrying a failed deletion, and after resolution because repeating the original decision succeeds. An opposite decision is refused with field_locked at decision. Items values: `"resolve"`. |

