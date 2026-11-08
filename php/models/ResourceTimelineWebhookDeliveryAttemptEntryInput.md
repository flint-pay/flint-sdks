[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineWebhookDeliveryAttemptEntryInput

A webhook delivery attempt recorded in this resource's timeline.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Optional | string | ID of the API request log associated with this attempt. Omitted when no request log is associated. Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`. |
| `attempt_number` | Required | integer | Which attempt this is for the delivery, starting at 1. Format: `int32`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_trigger` | Required | string | What caused this attempt. Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`. |
| `duration_milliseconds` | Optional | integer | How long the attempt took, in milliseconds. Format: `int64`. |
| `entry_type` | Required | string | Always `webhook_delivery_attempt` for this kind of entry. Values: `"webhook_delivery_attempt"`. |
| `error_category` | Optional | string | The kind of failure for this attempt. Present only when this attempt's `status` is `failed`. Values: [11 declared values](#resourcetimelinewebhookdeliveryattemptentryinput-error_category-values). |
| `error_summary` | Optional | string | A concise explanation of the failure for this attempt. Present only when this attempt's `status` is `failed`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `recommended_action` | Optional | string | The next step to resolve this attempt's failure. Present only when this attempt's `status` is `failed`. |
| `request_id` | Optional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `resource_timeline_entry_id` | Required | string | ID of this timeline entry. Example: `"watt_01KEZF7C00RG6XMCAFJB8HH55R"`. |
| `retryable` | Optional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. Present only when this attempt's `status` is `failed`. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Outcome of this individual delivery attempt. Values: `"pending"`, `"delivered"`, `"failed"`. |
| `status_code` | Optional | integer | HTTP status code the endpoint returned. Format: `int32`. |
| `webhook_delivery_attempt_id` | Required | string | ID of the delivery attempt. Example: `"watt_01KEZF7C00RG6XMCAFJB8HH55R"`. |
| `webhook_delivery_id` | Required | string | ID of the delivery the attempt belongs to. Example: `"wdel_01KEZF7C001DWSNDCDZHCTBN0A"`. |
| `webhook_endpoint_id` | Required | string | ID of the endpoint the delivery goes to. Example: `"whep_01KEZF7C006FXYTAJRZCGCBJTN"`. |
| `webhook_event_id` | Required | string | ID of the event being delivered. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

#### ResourceTimelineWebhookDeliveryAttemptEntryInput error_category values

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

