[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookDeliveryAttemptListResponse

A page of `WebhookDeliveryAttempt` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [WebhookDeliveryAttempt](../models/WebhookDeliveryAttempt.md#webhookdeliveryattempt) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/WebhookDeliveryAttemptListResponse.md#webhookdeliveryattemptlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### WebhookDeliveryAttemptListResponse.data[]

One attempt to deliver a webhook event to an endpoint, with its status, timing, response code, and error details.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version used for this delivery attempt. Omitted when the version was not recorded or payload rendering failed. Format: `date`. Example: `"2026-08-02"`. |
| `attempt_number` | Required | integer | Sequence number of this attempt within the delivery, including automatic and manual attempts. Format: `int32`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_trigger` | Required | string | What caused Flint to make this delivery attempt. Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`, `"test_event"`. |
| `duration_milliseconds` | Optional | integer | Duration of this delivery attempt in milliseconds. Format: `int64`. |
| `error_category` | Optional | string | The kind of failure for this attempt. Present only when this attempt's `status` is `failed`. Values: [11 declared values](#webhookdeliveryattemptlistresponsedata-error_category-values). |
| `error_summary` | Optional | string | A concise explanation of the failure for this attempt. Present only when this attempt's `status` is `failed`. |
| `reason_message` | Optional | string | The note supplied when this action was requested. |
| `recommended_action` | Optional | string | The next step to resolve the failed delivery attempt. |
| `response_body_excerpt` | Optional | string | Receiver response body excerpt. Omitted unless the caller can read the event's resource. |
| `response_content_type` | Optional | string | Receiver response content type. Omitted unless the caller can read the event's resource. |
| `response_headers` | Optional | Map of string | Receiver response headers, keyed by lowercase header name. Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the 14-day response-detail retention, or unless the caller can read the event's resource. |
| `retryable` | Optional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Outcome of this individual delivery attempt. Values: `"pending"`, `"delivered"`, `"failed"`. |
| `status_code` | Optional | integer | HTTP status returned by the receiver. Omitted when no HTTP response was received. Format: `int32`. |
| `webhook_delivery_attempt_id` | Required | string | ID of this individual attempt to send the event. Example: `"watt_01KEZF7C00RG6XMCAFJB8HH55R"`. |
| `webhook_delivery_id` | Required | string | ID of the endpoint delivery this attempt belongs to. Example: `"wdel_01KEZF7C001DWSNDCDZHCTBN0A"`. |
| `webhook_event_id` | Required | string | ID of the event sent by this attempt. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

#### WebhookDeliveryAttemptListResponse.data[] error_category values

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

### WebhookDeliveryAttemptListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

