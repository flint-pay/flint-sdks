[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimeline

The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entries` | Required | Array of Alternative shapes (see declared variants) | `entries[]`: [declared alternatives](../models/ResourceTimeline.md#resourcetimelineentries). |
| `resource_id` | Required | string |  |
| `resource_type` | Required | string | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [140 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [field definitions](../models/DeveloperGetCurrentAPIKeyRequestLogResponse200.md#developergetcurrentapikeyrequestlogresponse200dataresource_type). |
| `test` | Required | boolean |  |

### ResourceTimeline.entries[]

One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or image fields are present.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Conditional | string |  |
| `caller` | Conditional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The public resource that made this request. Absent when Flint cannot attribute the caller. A reference to another resource by `resource_type` and `resource_id`. |
| `client_request_id` | Conditional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. |
| `client_trace_id` | Conditional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. |
| `entry_type` | Required | string |  |
| `error_code` | Conditional | string |  |
| `error_summary` | Conditional | string |  |
| `error_type` | Conditional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLogInput.md#apirequestloginput-error_type-values). |
| `http_method` | Conditional | string |  |
| `latency_milliseconds` | Conditional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `path` | Conditional | string |  |
| `recommended_action` | Conditional | string |  |
| `reference_url` | Conditional | string | A Flint guide that explains this failure. Absent when no guide applies. |
| `request_id` | Conditional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `resource_timeline_entry_id` | Required | string |  |
| `retry` | Conditional | string | How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Conditional | string |  |
| `status_code` | Conditional | integer | Format: `int32`. |
| `event_type` | Conditional | string | Values: [246 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `webhook_event_id` | Conditional | string |  |
| `attempt_number` | Conditional | integer | Format: `int32`. |
| `completed_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_trigger` | Conditional | string | Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`. |
| `duration_milliseconds` | Conditional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `error_category` | Conditional | string | The kind of failure on the most recent failed attempt. Absent before any attempt, and when delivered or suppressed. Values: [11 declared values](#resourcetimelineentries-error_category-values). |
| `reason_message` | Conditional | string | The note supplied when this action was requested. |
| `retryable` | Conditional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Conditional | string | Values: `"delivered"`, `"failed"`, `"pending"`, `"queued"`, `"sending"`. |
| `webhook_delivery_attempt_id` | Conditional | string |  |
| `webhook_delivery_id` | Conditional | string |  |
| `webhook_endpoint_id` | Conditional | string |  |
| `image_version` | Conditional | integer string | Version of the resource's image attachments after this change. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `mutation_kind` | Conditional | string | The change made to the resource's images. Values: `"replaced"`. |

#### ResourceTimeline.entries[] error_category values

- `"webhook_timeout"`
- `"webhook_dns"`
- `"webhook_tls"`
- `"webhook_connection"`
- `"webhook_blocked_target"`
- `"webhook_request"`
- `"webhook_redirect"`
- `"webhook_http_4xx"`
- `"webhook_http_5xx"`
- `"server_error"`
- `"webhook_delivery"`

### ResourceTimeline.entries[] variant 1: `entry_type` = `"api_request"`

oneOf variant 1: An API request recorded in this resource's timeline..

- Required: `api_request_log_id`, `http_method`, `latency_milliseconds`, `path`, `request_id`, `route_pattern`, `status_code`.
- Optional: `caller`, `client_request_id`, `client_trace_id`, `error_code`, `error_summary`, `error_type`, `recommended_action`, `reference_url`, `retry`.
- Undeclared: `event_type`, `webhook_event_id`, `attempt_number`, `completed_at`, `delivery_trigger`, `duration_milliseconds`, `error_category`, `reason_message`, `retryable`, `started_at`, `status`, `webhook_delivery_attempt_id`, `webhook_delivery_id`, `webhook_endpoint_id`, `image_version`, `mutation_kind`.
- Constraints for `entry_type`: Values: `"api_request"`.
- Constraints for `error_summary`: A short explanation of why the request failed. Absent for successful requests.
- Constraints for `recommended_action`: The next action to resolve the failure. Absent when no action applies.

### ResourceTimeline.entries[] variant 2: `entry_type` = `"webhook_event"`

oneOf variant 2: A webhook event recorded in this resource's timeline..

- Required: `event_type`, `webhook_event_id`.
- Optional: `api_request_log_id`, `request_id`.
- Undeclared: `caller`, `client_request_id`, `client_trace_id`, `error_code`, `error_summary`, `error_type`, `http_method`, `latency_milliseconds`, `path`, `recommended_action`, `reference_url`, `retry`, `route_pattern`, `status_code`, `attempt_number`, `completed_at`, `delivery_trigger`, `duration_milliseconds`, `error_category`, `reason_message`, `retryable`, `started_at`, `status`, `webhook_delivery_attempt_id`, `webhook_delivery_id`, `webhook_endpoint_id`, `image_version`, `mutation_kind`.
- Constraints for `entry_type`: Values: `"webhook_event"`.

### ResourceTimeline.entries[] variant 3: `entry_type` = `"webhook_delivery_attempt"`

oneOf variant 3: A webhook delivery attempt recorded in this resource's timeline..

- Required: `attempt_number`, `delivery_trigger`, `status`, `webhook_delivery_attempt_id`, `webhook_delivery_id`, `webhook_endpoint_id`, `webhook_event_id`.
- Optional: `api_request_log_id`, `completed_at`, `duration_milliseconds`, `error_category`, `error_summary`, `reason_message`, `recommended_action`, `request_id`, `retryable`, `started_at`, `status_code`.
- Undeclared: `caller`, `client_request_id`, `client_trace_id`, `error_code`, `error_type`, `http_method`, `latency_milliseconds`, `path`, `reference_url`, `retry`, `route_pattern`, `event_type`, `image_version`, `mutation_kind`.
- Constraints for `entry_type`: Values: `"webhook_delivery_attempt"`.
- Constraints for `error_summary`: A concise explanation of the failed attempt. Absent before any attempt, and when delivered or suppressed.
- Constraints for `recommended_action`: The next step to resolve the failed delivery attempt.

### ResourceTimeline.entries[] variant 4: `entry_type` = `"image_mutation"`, `mutation_kind` = `"replaced"`

oneOf variant 4: A change to this resource's image attachments recorded in its timeline..

- Required: `image_version`, `mutation_kind`.
- Optional: `request_id`.
- Undeclared: `api_request_log_id`, `caller`, `client_request_id`, `client_trace_id`, `error_code`, `error_summary`, `error_type`, `http_method`, `latency_milliseconds`, `path`, `recommended_action`, `reference_url`, `retry`, `route_pattern`, `status_code`, `event_type`, `webhook_event_id`, `attempt_number`, `completed_at`, `delivery_trigger`, `duration_milliseconds`, `error_category`, `reason_message`, `retryable`, `started_at`, `status`, `webhook_delivery_attempt_id`, `webhook_delivery_id`, `webhook_endpoint_id`.
- Constraints for `entry_type`: Values: `"image_mutation"`.

### ResourceTimeline.resource_type

Field definitions: [DeveloperGetCurrentAPIKeyRequestLogResponse200.data.resource_type](../models/DeveloperGetCurrentAPIKeyRequestLogResponse200.md#developergetcurrentapikeyrequestlogresponse200dataresource_type).

