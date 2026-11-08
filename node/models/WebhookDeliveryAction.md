[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookDeliveryAction

The result of a webhook delivery action, such as a resend: the delivery, attempt, status, and any error details.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Required | integer | Sequence number of this attempt within the delivery, including automatic and manual attempts. Format: `int32`. |
| `attempt_status` | Required | string | Outcome of the individual attempt made by this action. Values: `"pending"`, `"delivered"`, `"failed"`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_status` | Required | string | Current state of the delivery after this action. Values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. |
| `delivery_trigger` | Required | string | What caused Flint to make this delivery attempt. Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`, `"test_event"`. |
| `duration_milliseconds` | Optional | integer | Duration of this delivery attempt in milliseconds. Format: `int64`. |
| `error_category` | Optional | string | The kind of failure for this attempt. Present only when this attempt's `attempt_status` is `failed`. Values: [11 declared values](#webhookdeliveryaction-error_category-values). |
| `error_summary` | Optional | string | A concise explanation of the failure for this attempt. Present only when this attempt's `attempt_status` is `failed`. |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `recommended_action` | Optional | string | The next step to resolve the failed delivery attempt. |
| `response_body_excerpt` | Optional | string | Receiver response body excerpt. Omitted unless the caller can read the event's resource. |
| `response_content_type` | Optional | string | Receiver response content type. Omitted unless the caller can read the event's resource. |
| `response_headers` | Optional | Map of string | Receiver response headers, keyed by lowercase header name. Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the 14-day response-detail retention, or unless the caller can read the event's resource. |
| `retryable` | Optional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status_code` | Optional | integer | HTTP status returned by the receiver. Omitted when no HTTP response was received. Format: `int32`. |
| `webhook_delivery_attempt_id` | Required | string | ID of this individual attempt to send the event. Example: `"watt_01KEZF7C00RG6XMCAFJB8HH55R"`. |
| `webhook_delivery_id` | Required | string | ID of the endpoint delivery this attempt belongs to. Example: `"wdel_01KEZF7C001DWSNDCDZHCTBN0A"`. |
| `webhook_event_id` | Required | string | ID of the event sent by this attempt. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

#### WebhookDeliveryAction error_category values

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

