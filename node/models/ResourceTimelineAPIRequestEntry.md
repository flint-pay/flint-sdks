[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceTimelineAPIRequestEntry

An API request recorded in this resource's timeline.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string |  |
| `caller` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The public resource that made this request. Absent when Flint cannot attribute the caller. A reference to another resource by `resource_type` and `resource_id`. `caller`: [field definitions](../models/ResourceTimelineAPIRequestEntry.md#resourcetimelineapirequestentrycaller). |
| `client_request_id` | Optional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. |
| `client_trace_id` | Optional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. |
| `entry_type` | Required | string | Values: `"api_request"`. |
| `error_code` | Optional | string |  |
| `error_summary` | Optional | string | A short explanation of why the request failed. Absent for successful requests. |
| `error_type` | Optional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLog.md#apirequestlog-error_type-values). |
| `http_method` | Required | string |  |
| `latency_milliseconds` | Required | integer | Format: `int64`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `path` | Required | string |  |
| `recommended_action` | Optional | string | The next action to resolve the failure. Absent when no action applies. |
| `reference_url` | Optional | string | A Flint guide that explains this failure. Absent when no guide applies. |
| `request_id` | Required | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `resource_timeline_entry_id` | Required | string |  |
| `retry` | Optional | string | How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Required | string |  |
| `status_code` | Required | integer | Format: `int32`. |

### ResourceTimelineAPIRequestEntry.caller

The public resource that made this request. Absent when Flint cannot attribute the caller. A reference to another resource by `resource_type` and `resource_id`.

Field definitions: [shared fields](APIRequestLog.md#apirequestlogcaller).

