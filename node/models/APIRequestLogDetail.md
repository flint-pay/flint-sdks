[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLogDetail

Full detail for one logged API request visible to the calling credential: headers, bodies, error summary, and how to reproduce it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string |  |
| `caller` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The public resource that made this request. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`. `caller`: [field definitions](../models/APIRequestLog.md#apirequestlogcaller). |
| `client_request_id` | Optional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. |
| `client_trace_id` | Optional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `error_code` | Optional | string |  |
| `error_summary` | Optional | string | A concise explanation of why the request failed. |
| `error_type` | Optional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLog.md#apirequestlog-error_type-values). |
| `expand` | Optional | Array of string | Normalized expand paths Flint applied. Absent when the request did not use expand. |
| `http_method` | Required | string |  |
| `ip_address` | Optional | string | The integration caller's IP address. Absent for buyer-side callers. |
| `latency_milliseconds` | Required | integer | Format: `int64`. |
| `path` | Required | string |  |
| `query_params` | Required | Array of [APIRequestLogQueryParam](../models/APIRequestLogQueryParam.md#apirequestlogqueryparam) |  |
| `recommended_action` | Optional | string | The next step to resolve this failure. |
| `reference_url` | Optional | string | A Flint guide that explains this failure. Absent when no guide applies. Format: `uri`. |
| `reproduction` | Required | [APIRequestLogReproduction](../models/APIRequestLogReproduction.md#apirequestlogreproduction) | A reproduction of the captured request. Replaying a non-GET request changes data. Replay with a sandbox key. |
| `request_body` | Optional | Alternative shapes (see declared variants) | The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. `request_body`: [declared alternatives](../models/APIRequestLogDetail.md#apirequestlogdetailrequest_body). |
| `request_headers` | Optional | Map of string | Request headers as received, keyed by header name. Sensitive values read [REDACTED]. |
| `request_id` | Required | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `requested_api_version` | Optional | string |  |
| `requested_api_version_source` | Optional | string | Values: `"header"`, `"partner_app"`, `"merchant"`, `"current"`. |
| `resource_id` | Optional | string |  |
| `resource_type` | Optional | [ResourceType](../models/ResourceType.md#resourcetype) | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [141 declared values](APIKey.md#apikeycreated_by-resource_type-values). |
| `response_body` | Optional | Alternative shapes (see declared variants) | The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. `response_body`: [declared alternatives](../models/APIRequestLogDetail.md#apirequestlogdetailrequest_body). |
| `response_content_type` | Optional | string |  |
| `retry` | Optional | string | How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Required | string |  |
| `served_api_version` | Optional | string |  |
| `status_code` | Required | integer | Format: `int32`. |
| `user_agent` | Optional | string | The integration caller's user agent. Absent for buyer-side callers. |

### APIRequestLogDetail.caller

Field definitions: [APIRequestLog.caller](../models/APIRequestLog.md#apirequestlogcaller).

### APIRequestLogDetail.request_body

### APIRequestLogDetail.request_body variant 1

oneOf variant 1.

- Value shape: object. The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogDetail.request_body variant 2

oneOf variant 2.

- Value shape: Array of any. The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogDetail.request_body variant 3

oneOf variant 3.

- Value shape: string. The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogDetail.response_body

Declared alternatives: [APIRequestLogDetail.request_body](../models/APIRequestLogDetail.md#apirequestlogdetailrequest_body).

