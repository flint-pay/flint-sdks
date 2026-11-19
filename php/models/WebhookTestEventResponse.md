[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookTestEventResponse

The response for: Create webhook test event.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Alternative shapes (see declared variants) | Resource, collection, or operation result returned by this request. `data`: [declared alternatives](../models/WebhookTestEventResponse.md#webhooktesteventresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### WebhookTestEventResponse.data

Resource, collection, or operation result returned by this request.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Conditional | integer | Sequence number of this attempt within the delivery, including automatic and manual attempts. Format: `int32`. |
| `attempt_status` | Conditional | string | Outcome of the individual attempt made by this action. Values: `"pending"`, `"delivered"`, `"failed"`. |
| `completed_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_status` | Conditional | string | Current state of the delivery after this action. Values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. |
| `delivery_trigger` | Conditional | string | What caused Flint to make this delivery attempt. Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`, `"test_event"`. |
| `duration_milliseconds` | Conditional | integer | Duration of this delivery attempt in milliseconds. Format: `int64`. |
| `error_category` | Conditional | string | The kind of failure for this attempt. Present only when this attempt's `attempt_status` is `failed`. Values: [11 declared values](#webhooktesteventresponsedata-error_category-values). |
| `error_summary` | Conditional | string | A concise explanation of the failure for this attempt. Present only when this attempt's `attempt_status` is `failed`. |
| `reason_message` | Conditional | string | The note supplied when this action was requested. |
| `recommended_action` | Conditional | string | The next step to resolve the failed delivery attempt. |
| `response_body_excerpt` | Conditional | string | Receiver response body excerpt. Omitted unless the caller can read the event's resource. |
| `response_content_type` | Conditional | string | Receiver response content type. Omitted unless the caller can read the event's resource. |
| `response_headers` | Conditional | Map of string | Receiver response headers, keyed by lowercase header name. Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the 14-day response-detail retention, or unless the caller can read the event's resource. |
| `retryable` | Conditional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `status_code` | Conditional | integer | HTTP status returned by the receiver. Omitted when no HTTP response was received. Format: `int32`. |
| `webhook_delivery_attempt_id` | Conditional | string | ID of this individual attempt to send the event. |
| `webhook_delivery_id` | Conditional | string | ID of the endpoint delivery this attempt belongs to. |
| `webhook_event_id` | Required | string |  |
| `delivery_method` | Conditional | string | This event is available through the webhook event stream. Values: `"listener_stream"`. |

#### WebhookTestEventResponse.data error_category values

- `"webhook_timeout"`
- `"webhook_dns"`
- `"webhook_tls"`
- `"webhook_connection"`
- `"webhook_blocked_target"`
- `"webhook_request"`
- `"webhook_redirect"`
- `"webhook_http_4xx"`
- `"webhook_http_5xx"`
- `"webhook_payload_render"`
- `"webhook_delivery"`

### WebhookTestEventResponse.data variant 1

oneOf WebhookDeliveryAction: The result of a webhook delivery action, such as a resend: the delivery, attempt, status, and any error details..

- Required: `attempt_number`, `attempt_status`, `delivery_status`, `delivery_trigger`, `webhook_delivery_attempt_id`, `webhook_delivery_id`.
- Optional: `completed_at`, `duration_milliseconds`, `error_category`, `error_summary`, `reason_message`, `recommended_action`, `response_body_excerpt`, `response_content_type`, `response_headers`, `retryable`, `started_at`, `status_code`.
- Undeclared: `delivery_method`.
- Constraints for `webhook_event_id`: ID of the event sent by this attempt.

### WebhookTestEventResponse.data variant 2: `delivery_method` = `"listener_stream"`

oneOf WebhookStreamTestEvent: A synthetic event published to the webhook event stream for flint listen. Publication confirms the event was recorded, without confirming receipt by a running listener..

- Required: `delivery_method`.
- Undeclared: `attempt_number`, `attempt_status`, `completed_at`, `delivery_status`, `delivery_trigger`, `duration_milliseconds`, `error_category`, `error_summary`, `reason_message`, `recommended_action`, `response_body_excerpt`, `response_content_type`, `response_headers`, `retryable`, `started_at`, `status_code`, `webhook_delivery_attempt_id`, `webhook_delivery_id`.
- Constraints for `webhook_event_id`: ID of the synthetic webhook event.

### WebhookTestEventResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

