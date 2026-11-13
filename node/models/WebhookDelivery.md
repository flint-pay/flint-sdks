[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookDelivery

An attempt to deliver an event to a webhook endpoint.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_attempt_count` | Required | integer | Attempts made by Flint's automatic schedule. Manual resends and the first attempt of a delivery you create don't count. Format: `int32`. |
| `created_at` | Required | string | When the delivery was created: when Flint prepared the event, or when you created it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivered_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `error_category` | Optional | string | The kind of failure on the most recent failed attempt. Absent before any attempt, and when delivered or suppressed. Values: [11 declared values](#webhookdelivery-error_category-values). |
| `error_summary` | Optional | string | A concise explanation of the failed attempt. Absent before any attempt, and when delivered or suppressed. |
| `last_response_code` | Optional | integer | HTTP status returned by the receiver on the latest recorded attempt. Omitted when no HTTP response was received. Format: `int32`. |
| `max_attempts` | Required | integer | Maximum automatic attempts. Format: `int32`. |
| `next_retry_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `recommended_action` | Optional | string | The next step to resolve the failed delivery attempt. |
| `retryable` | Optional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way. |
| `status` | Required | string | Current state of this endpoint delivery and its automatic retry schedule. Values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. |
| `suppression_reason` | Optional | string | Why this delivery was suppressed. Present exactly when status is suppressed. Suppressed deliveries have no failure explanation. Values: [7 declared values](#webhookdelivery-suppression_reason-values). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `webhook_delivery_id` | Required | string | Unique identifier for this webhook delivery, prefixed `wdel_`. Example: `"wdel_01KEZF7C001DWSNDCDZHCTBN0A"`. |
| `webhook_endpoint_id` | Required | string | ID of the receiving endpoint, retained even after the endpoint is deleted. Example: `"whep_01KEZF7C006FXYTAJRZCGCBJTN"`. |
| `webhook_event_id` | Required | string | ID of the event this delivery sends. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

#### WebhookDelivery error_category values

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

#### WebhookDelivery suppression_reason values

- `"endpoint_inactive"`
- `"endpoint_deleted"`
- `"authorization_revoked"`
- `"scope_missing"`
- `"event_not_allowed"`
- `"partner_app_install_revoked"`
- `"sandbox_reset"`

