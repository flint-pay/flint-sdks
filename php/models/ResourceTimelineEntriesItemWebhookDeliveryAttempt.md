[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineEntriesItemWebhookDeliveryAttempt

One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or image fields are present.

A webhook delivery attempt recorded in this resource's timeline.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Optional | string | ID of the API request log associated with this attempt. Omitted when no request log is associated. |
| `attempt_number` | Required | integer | Which attempt this is for the delivery, starting at 1. Format: `int32`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_trigger` | Required | string | What caused this attempt. Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`. |
| `duration_milliseconds` | Optional | integer | How long the attempt took, in milliseconds. Format: `int64`. |
| `entry_type` | Required | string | Always `webhook_delivery_attempt` for this kind of entry. Values: `"webhook_delivery_attempt"`. |
| `error_category` | Optional | string | The kind of failure for this attempt. Present only when this attempt's `status` is `failed`. Values: [11 declared values](#resourcetimelineentriesitemwebhookdeliveryattempt-error_category-values). |
| `error_summary` | Optional | string | A concise explanation of the failure for this attempt. Present only when this attempt's `status` is `failed`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `recommended_action` | Optional | string | The next step to resolve this attempt's failure. Present only when this attempt's `status` is `failed`. |
| `request_id` | Optional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. |
| `resource_timeline_entry_id` | Required | string | ID of this timeline entry. |
| `retryable` | Optional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. Present only when this attempt's `status` is `failed`. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Outcome of this individual delivery attempt. Values: `"pending"`, `"delivered"`, `"failed"`. |
| `status_code` | Optional | integer | HTTP status code the endpoint returned. Format: `int32`. |
| `webhook_delivery_attempt_id` | Required | string | ID of the delivery attempt. |
| `webhook_delivery_id` | Required | string | ID of the delivery the attempt belongs to. |
| `webhook_endpoint_id` | Required | string | ID of the endpoint the delivery goes to. |
| `webhook_event_id` | Required | string | ID of the event being delivered. |

#### ResourceTimelineEntriesItemWebhookDeliveryAttempt error_category values

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

