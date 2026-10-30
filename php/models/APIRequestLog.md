[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLog

A record of an API request and its response.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string |  |
| `caller` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The public resource that made this request. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`. |
| `client_request_id` | Optional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. |
| `client_trace_id` | Optional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `error_code` | Optional | string |  |
| `error_summary` | Optional | string | A concise explanation of why the request failed. |
| `error_type` | Optional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLogInput.md#apirequestloginput-error_type-values). |
| `expand` | Optional | Array of string | Normalized expand paths Flint applied. Absent when the request did not use expand. |
| `http_method` | Required | string |  |
| `latency_milliseconds` | Required | integer | Format: `int64`. |
| `path` | Required | string |  |
| `recommended_action` | Optional | string | The next step to resolve this failure. |
| `reference_url` | Optional | string | A Flint guide that explains this failure. Absent when no guide applies. Format: `uri`. |
| `request_id` | Required | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. |
| `requested_api_version` | Optional | string |  |
| `requested_api_version_source` | Optional | string | Values: `"header"`, `"partner_app"`, `"merchant"`, `"current"`. |
| `resource_id` | Optional | string |  |
| `resource_type` | Optional | string | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [141 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [field definitions](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedataresource_type). |
| `retry` | Optional | string | How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Required | string |  |
| `served_api_version` | Optional | string |  |
| `status_code` | Required | integer | Format: `int32`. |

### APIRequestLog.resource_type

Field definitions: [APIRequestLogDetailResponse.data.resource_type](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedataresource_type).

