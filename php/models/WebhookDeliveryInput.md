[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookDeliveryInput

An attempt to deliver an event to a webhook endpoint.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_attempt_count` | Required | integer | Attempts made by Flint's automatic schedule. Manual resends and the first attempt of a delivery you create don't count. Format: `int32`. |
| `created_at` | Required | string | When the delivery was created: when Flint prepared the event, or when you created it. Format: `date-time`. |
| `delivered_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `error_category` | Optional | string | The kind of failure on the most recent failed attempt. Absent before any attempt, and when delivered or suppressed. Values: [11 declared values](#webhookdeliveryinput-error_category-values). |
| `error_summary` | Optional | string | A concise explanation of the failed attempt. Absent before any attempt, and when delivered or suppressed. |
| `last_response_code` | Optional | integer | Format: `int32`. |
| `max_attempts` | Required | integer | Maximum automatic attempts. Format: `int32`. |
| `next_retry_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `recommended_action` | Optional | string | The next step to resolve the failed delivery attempt. |
| `retryable` | Optional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way. |
| `status` | Required | string | Values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. |
| `suppression_reason` | Optional | string | Why this delivery was suppressed. Present exactly when status is suppressed. Suppressed deliveries have no failure explanation. Values: `"endpoint_inactive"`, `"endpoint_deleted"`, `"authorization_revoked"`, `"scope_missing"`, `"event_not_allowed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `webhook_delivery_id` | Required | string |  |
| `webhook_endpoint_id` | Required | string |  |
| `webhook_event_id` | Required | string |  |

#### WebhookDeliveryInput error_category values

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

