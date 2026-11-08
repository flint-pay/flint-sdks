[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLogDetail

Full detail for one logged API request visible to the calling credential: headers, bodies, error summary, and how to reproduce it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string | Stable identifier of this log entry. |
| `caller` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The public resource that made this request. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`. `caller`: [field definitions](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatacaller). |
| `client_request_id` | Optional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. |
| `client_trace_id` | Optional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `error_code` | Optional | string | The response's top-level error `code`. Absent for successful requests. |
| `error_summary` | Optional | string | A concise explanation of why the request failed. |
| `error_type` | Optional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLogInput.md#apirequestloginput-error_type-values). |
| `expand` | Optional | Array of string | Normalized expand paths Flint applied. Absent when the request did not use expand. |
| `http_method` | Required | string | HTTP method of the request. |
| `ip_address` | Optional | string | The integration caller's IP address. Absent for buyer-side callers. |
| `latency_milliseconds` | Required | integer | Time Flint spent handling the request, in milliseconds. Format: `int64`. |
| `partner_app_id` | Optional | string | The partner app whose partner app token made this request; `caller` is the install. Absent for every other caller. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `path` | Required | string | Request path as sent, with real IDs, such as /v1/orders/ord_123. |
| `query_params` | Required | Array of [APIRequestLogQueryParam](../models/APIRequestLogQueryParam.md#apirequestlogqueryparam) | Query parameters as received, with sensitive values replaced. |
| `recommended_action` | Optional | string | The next step to resolve this failure. |
| `reference_url` | Optional | string | A Flint guide that explains this failure. Absent when no guide applies. Format: `uri`. |
| `reproduction` | Required | [APIRequestLogReproduction](../models/APIRequestLogReproduction.md#apirequestlogreproduction) | What you need to resend this request: its method, path, query parameters, headers, body, and a curl command. A reproduction of the captured request. Replaying a non-GET request changes data. Replay with a sandbox key. |
| `request_body` | Optional | Alternative shapes (see declared variants) | The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. `request_body`: [declared alternatives](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatarequest_body). |
| `request_headers` | Optional | Map of string | Request headers as received, keyed by header name. Sensitive values read [REDACTED]. |
| `request_id` | Required | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. |
| `requested_api_version` | Optional | string | The API version Flint resolved for the request. |
| `requested_api_version_source` | Optional | string | Where `requested_api_version` came from. Absent when Flint did not record one. Values: `"header"`, `"partner_app"`, `"merchant"`, `"current"`. |
| `resource_id` | Optional | string | The ID of the resource the request is about, when Flint can attribute it to one. A failed create can have a `resource_type` and no ID. |
| `resource_type` | Optional | string | The kind of resource the request is about, when Flint can attribute it to one. Values: [146 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `response_body` | Optional | Alternative shapes (see declared variants) | The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. `response_body`: [declared alternatives](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatarequest_body). |
| `response_content_type` | Optional | string | Content-Type of the response. |
| `retry` | Optional | string | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Required | string | The matched route as a method and path template, such as `POST /v1/orders`. |
| `served_api_version` | Optional | string | The API version Flint used to encode the response. |
| `status_code` | Required | integer | HTTP status Flint returned. Format: `int32`. |
| `user_agent` | Optional | string | The integration caller's user agent. Absent for buyer-side callers. |

### APIRequestLogDetail.caller

Field definitions: [APIRequestLogDetailResponse.data.caller](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatacaller).

### APIRequestLogDetail.request_body

Declared alternatives: [APIRequestLogDetailResponse.data.request_body](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatarequest_body).

### APIRequestLogDetail.response_body

Declared alternatives: [APIRequestLogDetailResponse.data.request_body](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatarequest_body).

