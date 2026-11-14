[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestResponse

A tracked deletion request and metadata about the API response.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest) | The tracked request to review and erase this customer's personal data. A request to delete a customer's personal information. `data`: [field definitions](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata about this response, including idempotency replay and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsemeta). |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerDeletionRequestResponse.data

The tracked request to review and erase this customer's personal data. A request to delete a customer's personal information.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocking_resource_count` | Optional | integer | Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. Format: `int64`. minimum: `0`. |
| `blocking_resources` | Optional | Array of [ErrorResourceReference](../models/ErrorResourceReference.md#errorresourcereference) | Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure. `blocking_resources[]`: [field definitions](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsedatablocking_resources). |
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

### CustomerDeletionRequestResponse.data.blocking_resources[]

A reference to a public resource named in an error, with its type, ID, and current status when available.

Field definitions: [shared fields](ErrorResourceReferenceInput.md#errorresourcereferenceinput).

### CustomerDeletionRequestResponse.meta

Metadata about this response, including idempotency replay and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsemeta).

### CustomerDeletionRequestResponse.meta.warnings[]

Field definitions: [DisputeResponse.meta.warnings[]](../models/DisputeResponse.md#disputeresponsemetawarnings).

