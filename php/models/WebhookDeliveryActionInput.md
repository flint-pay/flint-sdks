[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookDeliveryActionInput

The result of a webhook delivery action, such as a resend: the delivery, attempt, status, and any error details.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Required | integer | Format: `int32`. |
| `attempt_status` | Required | string | Values: `"queued"`, `"sending"`, `"delivered"`, `"failed"`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_status` | Required | string | Values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. |
| `delivery_trigger` | Required | string | Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`, `"test_event"`. |
| `duration_milliseconds` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `error_category` | Optional | string | The kind of failure on the most recent failed attempt. Absent before any attempt, and when delivered or suppressed. Values: [11 declared values](#webhookdeliveryactioninput-error_category-values). |
| `error_summary` | Optional | string | A concise explanation of the failed attempt. Absent before any attempt, and when delivered or suppressed. |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `recommended_action` | Optional | string | The next step to resolve the failed delivery attempt. |
| `response_body_excerpt` | Optional | string | Receiver response body excerpt. Omitted unless the caller can read the event's resource. |
| `response_content_type` | Optional | string | Receiver response content type. Omitted unless the caller can read the event's resource. |
| `response_headers` | Optional | Map of string | Receiver response headers, keyed by lowercase header name. Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the 14-day response-detail retention, or unless the caller can read the event's resource. |
| `retryable` | Optional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status_code` | Optional | integer | Format: `int32`. |
| `webhook_delivery_attempt_id` | Required | string |  |
| `webhook_delivery_id` | Required | string |  |
| `webhook_event_id` | Required | string |  |

#### WebhookDeliveryActionInput error_category values

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

