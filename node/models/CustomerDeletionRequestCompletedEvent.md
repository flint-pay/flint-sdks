[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestCompletedEvent

The `customer_deletion_request.completed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"customer_deletion_request.completed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | The originating request. `null` when the event has no originating request ID. `request`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest). |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### CustomerDeletionRequestCompletedEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributes). |

### CustomerDeletionRequestCompletedEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](CustomerDeletionRequest.md#customerdeletionrequest).

### CustomerDeletionRequestCompletedEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocking_resource_count` | Optional | integer or null | Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. `blocking_resource_count`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesblocking_resource_count). |
| `blocking_resources` | Optional | Array of [ErrorResourceReferencePreviousAttributes](../models/ErrorResourceReferencePreviousAttributes.md#errorresourcereferencepreviousattributes) or null | Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure. `blocking_resources`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesblocking_resources). |
| `canceled_subscription_ids` | Optional | Array of string or null | Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. `canceled_subscription_ids`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributescanceled_subscription_ids). |
| `customer_deletion_request_id` | Optional | string or null | Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. `customer_deletion_request_id`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributescustomer_deletion_request_id). |
| `customer_id` | Optional | string or null | ID of the customer the request would erase. `customer_id`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributescustomer_id). |
| `decided_at` | Optional | string or null | Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. `decided_at`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesdecided_at). |
| `decision_reason` | Optional | string or null | Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased. `decision_reason`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesdecision_reason). |
| `removed_payment_method_ids` | Optional | Array of string or null | Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. `removed_payment_method_ids`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesremoved_payment_method_ids). |
| `requested_at` | Optional | string or null | RFC3339 timestamp. `requested_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `requested_by` | Optional | string or null | Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. Values: `"buyer"`, `"merchant"`, `null`. `requested_by`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesrequested_by). |
| `resolved_at` | Optional | string or null | Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. `resolved_at`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesresolved_at). |
| `response_due_at` | Optional | string or null | Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. `response_due_at`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesresponse_due_at). |
| `retention_policy` | Optional | string or null | What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Values: `"retain_required_commerce_records"`. `retention_policy`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesretention_policy). |
| `status` | Optional | string or null | Where the request is in review and erasure. Values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. `status`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, during processing, and when retrying a failed deletion. Empty for completed and rejected requests. Repeating the original decision still succeeds; an opposite decision is refused with field_locked at decision. Items values: `"resolve"`. `supported_actions`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdataprevious_attributessupported_actions). |

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.blocking_resource_count

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.blocking_resource_count variant 1

anyOf variant 1: Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval..

- Value shape: integer. Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. Format: `int64`. minimum: `0`. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.blocking_resource_count variant 2

anyOf variant 2.

- Value shape: null. Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.blocking_resources

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.blocking_resources variant 1

anyOf variant 1: Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure..

- Value shape: Array of [ErrorResourceReferencePreviousAttributes](../models/ErrorResourceReferencePreviousAttributes.md#errorresourcereferencepreviousattributes). Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.blocking_resources variant 2

anyOf variant 2.

- Value shape: null. Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.canceled_subscription_ids

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.canceled_subscription_ids variant 1

anyOf variant 1: Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress..

- Value shape: Array of string. Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. Items: Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.canceled_subscription_ids variant 2

anyOf variant 2.

- Value shape: null. Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.customer_deletion_request_id

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.customer_deletion_request_id variant 1

anyOf variant 1: Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status..

- Value shape: string. Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. Example: `"cdel_01KEZF7C009P94WEXW5RMRFXAY"`. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.customer_deletion_request_id variant 2

anyOf variant 2.

- Value shape: null. Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.customer_id

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: ID of the customer the request would erase..

- Value shape: string. ID of the customer the request would erase. ID of the customer the request would erase. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the request would erase. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.decided_at

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.decided_at variant 1

anyOf variant 1: Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again..

- Value shape: string. Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.decided_at variant 2

anyOf variant 2.

- Value shape: null. Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.decision_reason

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.decision_reason variant 1

anyOf variant 1: Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased..

- Value shape: string. Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.decision_reason variant 2

anyOf variant 2.

- Value shape: null. Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.removed_payment_method_ids

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.removed_payment_method_ids variant 1

anyOf variant 1: Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress..

- Value shape: Array of string. Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. Items: Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.removed_payment_method_ids variant 2

anyOf variant 2.

- Value shape: null. Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.requested_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.requested_by

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.requested_by variant 1

anyOf variant 1: Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined..

- Value shape: string. Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. Values: `"buyer"`, `"merchant"`, `null`.

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.requested_by variant 2

anyOf variant 2.

- Value shape: null. Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.resolved_at

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.resolved_at variant 1

anyOf variant 1: Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again..

- Value shape: string. Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.resolved_at variant 2

anyOf variant 2.

- Value shape: null. Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.response_due_at

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.response_due_at variant 1

anyOf variant 1: Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request..

- Value shape: string. Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.response_due_at variant 2

anyOf variant 2.

- Value shape: null. Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.retention_policy

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.retention_policy variant 1

anyOf variant 1: What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later..

- Value shape: string. What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Values: `"retain_required_commerce_records"`.

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.retention_policy variant 2

anyOf variant 2.

- Value shape: null. What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.status

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the request is in review and erasure..

- Value shape: string. Where the request is in review and erasure. Values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`.

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the request is in review and erasure. 

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.supported_actions

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, during processing, and when retrying a failed deletion. Empty for completed and rejected requests. Repeating the original decision still succeeds; an opposite decision is refused with field_locked at decision..

- Value shape: Array of string. Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, during processing, and when retrying a failed deletion. Empty for completed and rejected requests. Repeating the original decision still succeeds; an opposite decision is refused with field_locked at decision. Items values: `"resolve"`.

### CustomerDeletionRequestCompletedEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, during processing, and when retrying a failed deletion. Empty for completed and rejected requests. Repeating the original decision still succeeds; an opposite decision is refused with field_locked at decision. 

### CustomerDeletionRequestCompletedEvent.request

Field definitions: [ApiKeyCreatedEvent.request](../models/ApiKeyCreatedEvent.md#apikeycreatedeventrequest).

