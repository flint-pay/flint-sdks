[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestCompletedEvent

The `customer_deletion_request.completed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [CustomerDeletionRequestCompletedEventData](../models/CustomerDeletionRequestCompletedEventData.md#customerdeletionrequestcompletedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"customer_deletion_request.completed"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomerDeletionRequestCompletedEventRequest](../models/CustomerDeletionRequestCompletedEventRequest.md#customerdeletionrequestcompletedeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### CustomerDeletionRequestCompletedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributes). |

### CustomerDeletionRequestCompletedEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](CustomerDeletionRequest.md#customerdeletionrequest).

### CustomerDeletionRequestCompletedEvent.data fields 1.object.blocking_resources[]

Field definitions: [CustomerDeletionRequestResponse.data.blocking_resources[]](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsedatablocking_resources).

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](CustomerDeletionRequestCompletedEventDataPreviousAttributes.md#customerdeletionrequestcompletedeventdatapreviousattributes).

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resource_count

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resource_count variant 1

anyOf variant 1: Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval..

- Value shape: integer. Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. Format: `int64`. minimum: `0`. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resource_count variant 2

anyOf variant 2.

- Value shape: null. Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1

anyOf variant 1: Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure..

- Value shape: Array of [ErrorResourceReferencePreviousAttributes](../models/ErrorResourceReferencePreviousAttributes.md#errorresourcereferencepreviousattributes). Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 2

anyOf variant 2.

- Value shape: null. Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Optional | string or null | Public Flint ID of the referenced resource. `resource_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id). |
| `resource_type` | Optional | string or null | Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. `resource_type`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesblocking_resources-variant-1-fields-1resource_type). |
| `status` | Optional | string or null | Current public status of the referenced resource when available. `status`: [declared alternatives](../models/CustomerDeletionRequestCompletedEvent.md#customerdeletionrequestcompletedeventdata-fields-1previous_attributesblocking_resources-variant-1-fields-1status). |

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1.[] fields 1.resource_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id).

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1.[] fields 1.resource_type

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1.[] fields 1.resource_type variant 1

anyOf variant 1: Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type..

- Value shape: string. Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. Example: `"order"`. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1.[] fields 1.resource_type variant 2

anyOf variant 2.

- Value shape: null. Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1.[] fields 1.status

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1.[] fields 1.status variant 1

anyOf variant 1: Current public status of the referenced resource when available..

- Value shape: string. Current public status of the referenced resource when available. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.blocking_resources variant 1.[] fields 1.status variant 2

anyOf variant 2.

- Value shape: null. Current public status of the referenced resource when available. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.canceled_subscription_ids

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.canceled_subscription_ids variant 1

anyOf variant 1: Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress..

- Value shape: Array of string. Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.canceled_subscription_ids variant 2

anyOf variant 2.

- Value shape: null. Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.customer_deletion_request_id

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.customer_deletion_request_id variant 1

anyOf variant 1: Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status..

- Value shape: string. Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.customer_deletion_request_id variant 2

anyOf variant 2.

- Value shape: null. Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.customer_id

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.customer_id variant 1

anyOf variant 1: ID of the customer the request would erase..

- Value shape: string. ID of the customer the request would erase. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer the request would erase. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.decided_at

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.decided_at variant 1

anyOf variant 1: Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again..

- Value shape: string. Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. Format: `date-time`. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.decided_at variant 2

anyOf variant 2.

- Value shape: null. Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.decision_reason

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.decision_reason variant 1

anyOf variant 1: Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased..

- Value shape: string. Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.decision_reason variant 2

anyOf variant 2.

- Value shape: null. Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.removed_payment_method_ids

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.removed_payment_method_ids variant 1

anyOf variant 1: Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress..

- Value shape: Array of string. Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.removed_payment_method_ids variant 2

anyOf variant 2.

- Value shape: null. Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.requested_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.requested_by

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.requested_by variant 1

anyOf variant 1: Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined..

- Value shape: string. Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. Values: `"buyer"`, `"merchant"`, `null`.

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.requested_by variant 2

anyOf variant 2.

- Value shape: null. Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.resolved_at

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.resolved_at variant 1

anyOf variant 1: Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again..

- Value shape: string. Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. Format: `date-time`. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.resolved_at variant 2

anyOf variant 2.

- Value shape: null. Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.response_due_at

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.response_due_at variant 1

anyOf variant 1: Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request..

- Value shape: string. Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. Format: `date-time`. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.response_due_at variant 2

anyOf variant 2.

- Value shape: null. Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.retention_policy

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.retention_policy variant 1

anyOf variant 1: What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later..

- Value shape: string. What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Values: `"retain_required_commerce_records"`.

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.retention_policy variant 2

anyOf variant 2.

- Value shape: null. What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.status

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Where the request is in review and erasure..

- Value shape: string. Where the request is in review and erasure. Values: `"pending_review"`, `"processing"`, `"completed"`, `"rejected"`, `"failed"`.

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the request is in review and erasure. 

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.supported_actions

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, when retrying a failed deletion, and after resolution because repeating the original decision succeeds. An opposite decision is refused with field_locked at decision..

- Value shape: Array of string. Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, when retrying a failed deletion, and after resolution because repeating the original decision succeeds. An opposite decision is refused with field_locked at decision. Items values: `"resolve"`.

### CustomerDeletionRequestCompletedEvent.data fields 1.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, when retrying a failed deletion, and after resolution because repeating the original decision succeeds. An opposite decision is refused with field_locked at decision. 

