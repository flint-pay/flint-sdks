[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestCompletedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocking_resource_count` | Optional | integer or null | Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. `blocking_resource_count`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesblocking_resource_count). |
| `blocking_resources` | Optional | Array of [ErrorResourceReferencePreviousAttributes](../models/ErrorResourceReferencePreviousAttributes.md#errorresourcereferencepreviousattributes) or null | Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure. `blocking_resources`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesblocking_resources). |
| `canceled_subscription_ids` | Optional | Array of string or null | Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. `canceled_subscription_ids`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributescanceled_subscription_ids). |
| `customer_deletion_request_id` | Optional | string or null | Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. `customer_deletion_request_id`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributescustomer_deletion_request_id). |
| `customer_id` | Optional | string or null | ID of the customer the request would erase. `customer_id`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributescustomer_id). |
| `decided_at` | Optional | string or null or null | Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. `decided_at`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesdecided_at). |
| `decision_reason` | Optional | string or null or null | Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased. `decision_reason`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesdecision_reason). |
| `removed_payment_method_ids` | Optional | Array of string or null | Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. `removed_payment_method_ids`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesremoved_payment_method_ids). |
| `requested_at` | Optional | string or null | RFC3339 timestamp. `requested_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `requested_by` | Optional | string or null or null | Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. Values: `"buyer"`, `"merchant"`, `null`. `requested_by`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesrequested_by). |
| `resolved_at` | Optional | string or null | Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. `resolved_at`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesresolved_at). |
| `response_due_at` | Optional | string or null | Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. `response_due_at`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesresponse_due_at). |
| `retention_policy` | Optional | string or null | What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Values: `"retain_required_commerce_records"`. `retention_policy`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesretention_policy). |
| `status` | Optional | string or null | Where the request is in review and erasure. Values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`. `status`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, when retrying a failed deletion, and after resolution because repeating the original decision succeeds. An opposite decision is refused with field_locked at decision. Items values: `"resolve"`. `supported_actions`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributessupported_actions). |

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.blocking_resource_count

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resource_count](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesblocking_resource_count).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.blocking_resources

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesblocking_resources).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.canceled_subscription_ids

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.canceled_subscription_ids](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributescanceled_subscription_ids).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.customer_deletion_request_id

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.customer_deletion_request_id](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributescustomer_deletion_request_id).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.customer_id

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.customer_id](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributescustomer_id).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.decided_at

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.decided_at](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesdecided_at).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.decision_reason

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.decision_reason](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesdecision_reason).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.removed_payment_method_ids

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.removed_payment_method_ids](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesremoved_payment_method_ids).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.requested_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.requested_by

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.requested_by](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesrequested_by).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.resolved_at

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.resolved_at](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesresolved_at).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.response_due_at

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.response_due_at](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesresponse_due_at).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.retention_policy

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.retention_policy](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesretention_policy).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.status

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.status](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesstatus).

### CustomerDeletionRequestCompletedEventDataPreviousAttributes.supported_actions

Declared alternatives: [CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.supported_actions](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributessupported_actions).

