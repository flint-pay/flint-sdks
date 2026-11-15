[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineEntriesItemApiRequest

One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or image fields are present.

An API request recorded in this resource's timeline.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string | Stable identifier of this log entry. |
| `attributed_resource` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) | The resource this request log is attributed to. Always present: the timeline resource for a direct request, or its directly owned resource for an included request. A reference to another resource by `resource_type` and `resource_id`. `attributed_resource`: [field definitions](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries-variant-1attributed_resource). |
| `caller` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | Who made this request. An API key, workload token, or partner app token records that API key, workload identity, or partner app installation. A Dashboard write, CLI login, or onboarding session records the user. A buyer checkout request records the checkout session. A buyer account request records the customer session. A request made with invoice access records the invoice. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`. `caller`: [field definitions](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatacaller). |
| `client_request_id` | Optional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. |
| `client_trace_id` | Optional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. |
| `entry_type` | Required | string | Always `api_request` for this kind of entry. Values: `"api_request"`. |
| `error_code` | Optional | string | The response's top-level error `code`. Absent for successful requests. |
| `error_summary` | Optional | string | A short explanation of why the request failed. Absent for successful requests. |
| `error_type` | Optional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLogInput.md#apirequestloginput-error_type-values). |
| `http_method` | Required | string | HTTP method of the request. |
| `latency_milliseconds` | Required | integer | Time Flint spent handling the request, in milliseconds. Format: `int64`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `path` | Required | string | Request path as sent, with real IDs, such as /v1/orders/ord_123. |
| `recommended_action` | Optional | string | The next action to resolve the failure. Absent when no action applies. |
| `reference_url` | Optional | string | Full URL of the Flint guide that explains this failure. Absent when no guide applies. Format: `uri`. |
| `request_id` | Required | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. |
| `resource_timeline_entry_id` | Required | string | ID of this timeline entry. |
| `retry` | Optional | string | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Required | string | The matched route as a method and path template, such as `POST /v1/orders`. |
| `status_code` | Required | integer | HTTP status Flint returned. Format: `int32`. |

### ResourceTimelineEntriesItemApiRequest.attributed_resource

Field definitions: [ResourceTimelineResponse.data.entries[] variant 1.attributed_resource](../models/ResourceTimelineResponse.md#resourcetimelineresponsedataentries-variant-1attributed_resource).

### ResourceTimelineEntriesItemApiRequest.caller

Field definitions: [APIRequestLogDetailResponse.data.caller](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatacaller).

