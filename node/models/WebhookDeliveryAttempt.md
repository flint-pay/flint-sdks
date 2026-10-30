[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookDeliveryAttempt

One attempt to deliver a webhook event to an endpoint, with its status, timing, response code, and error details.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version used for this delivery attempt. Omitted when the version was not recorded or payload rendering failed. Format: `date`. |
| `attempt_number` | Required | integer | Format: `int32`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_trigger` | Required | string | Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`, `"test_event"`. |
| `duration_milliseconds` | Optional | integer | Format: `int64`. |
| `error_category` | Optional | string | The kind of failure on the most recent failed attempt. Absent before any attempt, and when delivered or suppressed. Values: [11 declared values](#webhookdeliveryattempt-error_category-values). |
| `error_summary` | Optional | string | A concise explanation of the failed attempt. Absent before any attempt, and when delivered or suppressed. |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `recommended_action` | Optional | string | The next step to resolve the failed delivery attempt. |
| `response_body_excerpt` | Optional | string | Receiver response body excerpt. Omitted unless the caller can read the event's resource. |
| `response_content_type` | Optional | string | Receiver response content type. Omitted unless the caller can read the event's resource. |
| `response_headers` | Optional | Map of string | Receiver response headers, keyed by lowercase header name. Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the 14-day response-detail retention, or unless the caller can read the event's resource. |
| `retryable` | Optional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"queued"`, `"sending"`, `"delivered"`, `"failed"`. |
| `status_code` | Optional | integer | Format: `int32`. |
| `webhook_delivery_attempt_id` | Required | string |  |
| `webhook_delivery_id` | Required | string |  |
| `webhook_event_id` | Required | string |  |

#### WebhookDeliveryAttempt error_category values

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

