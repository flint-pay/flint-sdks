[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineResponse

A response containing `ResourceTimeline` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ResourceTimeline](../models/ResourceTimeline.md#resourcetimeline) | Resource, collection, or operation result returned by this request. The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes. Request entries include the resource itself and one level of directly owned resources, resolved when the timeline is read: orders include their payment intents, public refunds, fulfillments, returns, invoices, and disputes; payment intents include their public refunds and disputes. Included requests require the caller's read access to each owned resource type. Types the caller cannot read are excluded before pagination. Ownership follows the child resource's order_id or payment_intent_id. Other resource types include only directly attributed requests. Internal payment-refund children are excluded. attributed_resource always names the resource the request log is attributed to. Webhook and image entries remain scoped to the timeline resource. Page sizes and ordering are unchanged. `data`: [field definitions](../models/ResourceTimelineResponse.md#resourcetimelineresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ResourceTimelineResponse.data

Resource, collection, or operation result returned by this request. The activity timeline for one resource, such as API requests, webhook events and deliveries, and image changes. Request entries include the resource itself and one level of directly owned resources, resolved when the timeline is read: orders include their payment intents, public refunds, fulfillments, returns, invoices, and disputes; payment intents include their public refunds and disputes. Included requests require the caller's read access to each owned resource type. Types the caller cannot read are excluded before pagination. Ownership follows the child resource's order_id or payment_intent_id. Other resource types include only directly attributed requests. Internal payment-refund children are excluded. attributed_resource always names the resource the request log is attributed to. Webhook and image entries remain scoped to the timeline resource. Page sizes and ordering are unchanged.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `entries` | Required | Array of Alternative shapes (see declared variants) | Timeline entries for the resource, each tagged by `entry_type`. Narrowed by `include`, `occurred_after`, and `occurred_before`. `entries[]`: [declared alternatives](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries). |
| `resource_id` | Required | string | ID of the resource this timeline is for. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Required | string | Type of the resource this timeline is for. Example: `"order"`. Values: [153 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `test` | Required | boolean | `true` when the timeline is for test mode data and `false` for live data. |

### ResourceTimelineResponse.data.entries[]

One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or image fields are present.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Conditional | string | Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`. |
| `attributed_resource` | Conditional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The resource this request log is attributed to. Always present: the timeline resource for a direct request, or its directly owned resource for an included request. A reference to another resource by `resource_type` and `resource_id`. `attributed_resource`: [field definitions](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries-variant-1attributed_resource). |
| `caller` | Conditional | [ResourceReference](../models/ResourceReference.md#resourcereference) | Who made this request. An API key, workload token, or partner app token records that API key, workload identity, or partner app installation. A Dashboard write, CLI login, or onboarding session records the user. A buyer checkout request records the checkout session. A buyer account request records the customer session. A request made with invoice access records the invoice. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`. `caller`: [field definitions](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatacaller). |
| `client_request_id` | Conditional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. Example: `"checkout-1842"`. |
| `client_trace_id` | Conditional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. Example: `"0123456789abcdef0123456789abcdef"`. |
| `entry_type` | Required | string |  |
| `error_code` | Conditional | string | The response's top-level error `code`. Absent for successful requests. |
| `error_summary` | Conditional | string |  |
| `error_type` | Conditional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLogInput.md#apirequestloginput-error_type-values). |
| `http_method` | Conditional | string | HTTP method of the request. |
| `latency_milliseconds` | Conditional | integer | Time Flint spent handling the request, in milliseconds. Format: `int64`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `path` | Conditional | string | Request path as sent, with real IDs, such as /v1/orders/ord_123. |
| `recommended_action` | Conditional | string |  |
| `reference_url` | Conditional | string | Full URL of the Flint guide that explains this failure. Absent when no guide applies. Format: `uri`. Example: `"https://example.com/receipt"`. |
| `request_id` | Conditional | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `resource_timeline_entry_id` | Required | string | ID of this timeline entry. |
| `retry` | Conditional | string | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Conditional | string | The matched route as a method and path template, such as `POST /v1/orders`. |
| `status_code` | Conditional | integer | Format: `int32`. |
| `event_type` | Conditional | string | Type of webhook event recorded for this resource. Values: [291 declared values](CreateWebhookTestEventRequestInput.md#createwebhooktesteventrequestinput-event_type-values). |
| `webhook_event_id` | Conditional | string | ID of the event being delivered. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |
| `attempt_number` | Conditional | integer | Which attempt this is for the delivery, starting at 1. Format: `int32`. |
| `completed_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_trigger` | Conditional | string | What caused this attempt. Values: `"automatic_delivery"`, `"automatic_retry"`, `"manual_resend"`, `"manual_delivery"`. |
| `duration_milliseconds` | Conditional | integer | How long the attempt took, in milliseconds. Format: `int64`. |
| `error_category` | Conditional | string | The kind of failure for this attempt. Present only when this attempt's `status` is `failed`. Values: [11 declared values](#resourcetimelineresponsedataentries-error_category-values). |
| `reason_message` | Conditional | string | The note supplied when this action was requested. |
| `retryable` | Conditional | boolean | Whether sending this delivery again without changing your endpoint is likely to succeed. Present only when this attempt's `status` is `failed`. While the delivery is pending, Flint retries automatically either way. |
| `started_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Conditional | string | Outcome of this individual delivery attempt. Values: `"pending"`, `"delivered"`, `"failed"`. |
| `webhook_delivery_attempt_id` | Conditional | string | ID of the delivery attempt. Example: `"watt_01KEZF7C00RG6XMCAFJB8HH55R"`. |
| `webhook_delivery_id` | Conditional | string | ID of the delivery the attempt belongs to. Example: `"wdel_01KEZF7C001DWSNDCDZHCTBN0A"`. |
| `webhook_endpoint_id` | Conditional | string | ID of the endpoint the delivery goes to. Example: `"whep_01KEZF7C006FXYTAJRZCGCBJTN"`. |
| `image_version` | Conditional | integer | Version of the resource's image attachments after this change. Format: `int64`. |
| `mutation_kind` | Conditional | string | The change made to the resource's images. Values: `"replaced"`. |

#### ResourceTimelineResponse.data.entries[] error_category values

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

### ResourceTimelineResponse.data.entries[] variant 1: `entry_type` = `"api_request"`

oneOf with entry_type: "api_request": An API request recorded in this resource's timeline..

- Required: `api_request_log_id`, `attributed_resource`, `http_method`, `latency_milliseconds`, `path`, `request_id`, `route_pattern`, `status_code`.
- Optional: `caller`, `client_request_id`, `client_trace_id`, `error_code`, `error_summary`, `error_type`, `recommended_action`, `reference_url`, `retry`.
- Undeclared: `event_type`, `webhook_event_id`, `attempt_number`, `completed_at`, `delivery_trigger`, `duration_milliseconds`, `error_category`, `reason_message`, `retryable`, `started_at`, `status`, `webhook_delivery_attempt_id`, `webhook_delivery_id`, `webhook_endpoint_id`, `image_version`, `mutation_kind`.
- Constraints for `api_request_log_id`: Stable identifier of this log entry.
- Constraints for `entry_type`: Always `api_request` for this kind of entry. Values: `"api_request"`.
- Constraints for `error_summary`: A short explanation of why the request failed. Absent for successful requests.
- Constraints for `recommended_action`: The next action to resolve the failure. Absent when no action applies.
- Constraints for `resource_timeline_entry_id`: Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`.
- Constraints for `status_code`: HTTP status Flint returned.

### ResourceTimelineResponse.data.entries[] variant 2: `entry_type` = `"webhook_event"`

oneOf with entry_type: "webhook_event": A webhook event recorded in this resource's timeline..

- Required: `event_type`, `webhook_event_id`.
- Optional: `api_request_log_id`, `request_id`.
- Undeclared: `attributed_resource`, `caller`, `client_request_id`, `client_trace_id`, `error_code`, `error_summary`, `error_type`, `http_method`, `latency_milliseconds`, `path`, `recommended_action`, `reference_url`, `retry`, `route_pattern`, `status_code`, `attempt_number`, `completed_at`, `delivery_trigger`, `duration_milliseconds`, `error_category`, `reason_message`, `retryable`, `started_at`, `status`, `webhook_delivery_attempt_id`, `webhook_delivery_id`, `webhook_endpoint_id`, `image_version`, `mutation_kind`.
- Constraints for `api_request_log_id`: ID of the API request log associated with this event. Omitted when no request log is associated.
- Constraints for `entry_type`: Always `webhook_event` for this kind of entry. Values: `"webhook_event"`.
- Constraints for `resource_timeline_entry_id`: Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`.

### ResourceTimelineResponse.data.entries[] variant 3: `entry_type` = `"webhook_delivery_attempt"`

oneOf with entry_type: "webhook_delivery_attempt": A webhook delivery attempt recorded in this resource's timeline..

- Required: `attempt_number`, `delivery_trigger`, `status`, `webhook_delivery_attempt_id`, `webhook_delivery_id`, `webhook_endpoint_id`, `webhook_event_id`.
- Optional: `api_request_log_id`, `completed_at`, `duration_milliseconds`, `error_category`, `error_summary`, `reason_message`, `recommended_action`, `request_id`, `retryable`, `started_at`, `status_code`.
- Undeclared: `attributed_resource`, `caller`, `client_request_id`, `client_trace_id`, `error_code`, `error_type`, `http_method`, `latency_milliseconds`, `path`, `reference_url`, `retry`, `route_pattern`, `event_type`, `image_version`, `mutation_kind`.
- Constraints for `api_request_log_id`: ID of the API request log associated with this attempt. Omitted when no request log is associated.
- Constraints for `entry_type`: Always `webhook_delivery_attempt` for this kind of entry. Values: `"webhook_delivery_attempt"`.
- Constraints for `error_summary`: A concise explanation of the failure for this attempt. Present only when this attempt's `status` is `failed`.
- Constraints for `recommended_action`: The next step to resolve this attempt's failure. Present only when this attempt's `status` is `failed`.
- Constraints for `resource_timeline_entry_id`: Example: `"watt_01KEZF7C00RG6XMCAFJB8HH55R"`.
- Constraints for `status_code`: HTTP status code the endpoint returned.

### ResourceTimelineResponse.data.entries[] variant 4: `entry_type` = `"image_mutation"`, `mutation_kind` = `"replaced"`

oneOf with entry_type: "image_mutation": A change to this resource's image attachments recorded in its timeline..

- Required: `image_version`, `mutation_kind`.
- Optional: `request_id`.
- Undeclared: `api_request_log_id`, `attributed_resource`, `caller`, `client_request_id`, `client_trace_id`, `error_code`, `error_summary`, `error_type`, `http_method`, `latency_milliseconds`, `path`, `recommended_action`, `reference_url`, `retry`, `route_pattern`, `status_code`, `event_type`, `webhook_event_id`, `attempt_number`, `completed_at`, `delivery_trigger`, `duration_milliseconds`, `error_category`, `reason_message`, `retryable`, `started_at`, `status`, `webhook_delivery_attempt_id`, `webhook_delivery_id`, `webhook_endpoint_id`.
- Constraints for `entry_type`: Always `image_mutation` for this kind of entry. Values: `"image_mutation"`.
- Constraints for `resource_timeline_entry_id`: Example: `"iomevt_01KEZF7C00D4JSSDP6AB68EFF2"`.

### ResourceTimelineResponse.data.entries[] variant 1.attributed_resource

The resource this request log is attributed to. Always present: the timeline resource for a direct request, or its directly owned resource for an included request. A reference to another resource by `resource_type` and `resource_id`.

Field definitions: [shared fields](ResourceReferenceInput.md#resourcereferenceinput).

### ResourceTimelineResponse.data.entries[] variant 1.caller

Field definitions: [APIRequestLogDetailResponse.data.caller](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatacaller).

### ResourceTimelineResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

