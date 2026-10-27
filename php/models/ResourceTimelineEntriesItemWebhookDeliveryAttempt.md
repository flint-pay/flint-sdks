[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineEntriesItemWebhookDeliveryAttempt

One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or image fields are present.

A webhook delivery attempt recorded in this resource's timeline.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Optional | string |  |
| `attempt_number` | Required | integer | Format: `int32`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_trigger` | Required | string | Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`. |
| `duration_milliseconds` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `entry_type` | Required | string | Values: `"webhook_delivery_attempt"`. |
| `error_category` | Optional | string | The kind of failure on the most recent failed attempt. Absent before any attempt, and when delivered or suppressed. Values: [11 declared values](#resourcetimelineentriesitemwebhookdeliveryattempt-error_category-values). |
| `error_summary` | Optional | string | A concise explanation of the failed attempt. Absent before any attempt, and when delivered or suppressed. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `recommended_action` | Optional | string | The next step to resolve the failed delivery attempt. |
| `request_id` | Optional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. |
| `resource_timeline_entry_id` | Required | string |  |
| `retryable` | Optional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"delivered"`, `"failed"`, `"pending"`, `"queued"`, `"sending"`. |
| `status_code` | Optional | integer | Format: `int32`. |
| `webhook_delivery_attempt_id` | Required | string |  |
| `webhook_delivery_id` | Required | string |  |
| `webhook_endpoint_id` | Required | string |  |
| `webhook_event_id` | Required | string |  |

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
- `"server_error"`
- `"webhook_delivery"`

