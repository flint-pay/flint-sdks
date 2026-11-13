[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLogDetail

Full detail for one logged API request visible to the calling credential: headers, bodies, error summary, and how to reproduce it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string | Stable identifier of this log entry. Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`. |
| `caller` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | Who made this request. An API key, workload token, or partner app token records that API key, workload identity, or partner app installation. A Dashboard write, CLI login, or onboarding session records the user. A buyer checkout request records the checkout session. A buyer account request records the customer session. A request made with invoice access records the invoice. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`. |
| `client_request_id` | Optional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. Example: `"checkout-1842"`. |
| `client_trace_id` | Optional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. Example: `"0123456789abcdef0123456789abcdef"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | The customer whose customer session made this request; `caller` is the session. Absent for every other caller. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `error_code` | Optional | string | The response's top-level error `code`. Absent for successful requests. |
| `error_summary` | Optional | string | A concise explanation of why the request failed. |
| `error_type` | Optional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLog.md#apirequestlog-error_type-values). |
| `expand` | Optional | Array of string | Normalized expand paths Flint applied. Absent when the request did not use expand. |
| `http_method` | Required | string | HTTP method of the request. |
| `ip_address` | Optional | string | The client IP address the request came from. When your server relays a buyer's request, this is your server's address. For a buyer-side caller (a checkout session, customer session, or invoice) it is kept for 30 days and removed when the customer is deleted. Absent when `caller` is absent. |
| `latency_milliseconds` | Required | integer | Time Flint spent handling the request, in milliseconds. Format: `int64`. |
| `partner_app_id` | Optional | string | The partner app whose partner app token made this request; `caller` is the install. Absent for every other caller. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `path` | Required | string | Request path as sent, with real IDs, such as /v1/orders/ord_123. |
| `query_params` | Required | Array of [APIRequestLogQueryParam](../models/APIRequestLogQueryParam.md#apirequestlogqueryparam) | Query parameters as received, with sensitive values replaced. |
| `recommended_action` | Optional | string | The next step to resolve this failure. |
| `reference_url` | Optional | string | A Flint guide that explains this failure. Absent when no guide applies. Format: `uri`. Example: `"https://example.com/receipt"`. |
| `reproduction` | Required | [APIRequestLogReproduction](../models/APIRequestLogReproduction.md#apirequestlogreproduction) | What you need to resend this request: its method, path, query parameters, headers, body, and a curl command. A reproduction of the captured request. Replaying a non-GET request changes data. Replay with a sandbox key. |
| `request_body` | Optional | Alternative shapes (see declared variants) | The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. Requests under /v1/me never store bodies. `request_body`: [declared alternatives](../models/APIRequestLogDetail.md#apirequestlogdetailrequest_body). |
| `request_headers` | Optional | Map of string | Captured request headers, keyed by header name. Buyer-side callers keep only content metadata, API version, idempotency, request ID, and trace headers; other headers are omitted. For other callers, sensitive values read [REDACTED]. |
| `request_id` | Required | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `requested_api_version` | Optional | string | The API version Flint resolved for the request. |
| `requested_api_version_source` | Optional | string | Where `requested_api_version` came from. Absent when Flint did not record one. Values: `"header"`, `"partner_app"`, `"merchant"`, `"current"`. |
| `resource_id` | Optional | string | The ID of the resource the request is about, when Flint can attribute it to one. A failed create can have a `resource_type` and no ID. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Optional | string | The kind of resource the request is about, when Flint can attribute it to one. Example: `"order"`. Values: [153 declared values](APIRequestLog.md#apirequestlog-resource_type-values). |
| `response_body` | Optional | Alternative shapes (see declared variants) | The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. Requests under /v1/me never store bodies. `response_body`: [declared alternatives](../models/APIRequestLogDetail.md#apirequestlogdetailrequest_body). |
| `response_content_type` | Optional | string | Content-Type of the response. |
| `retry` | Optional | string | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Required | string | The matched route as a method and path template, such as `POST /v1/orders`. |
| `served_api_version` | Optional | string | The API version Flint used to encode the response. |
| `status_code` | Required | integer | HTTP status Flint returned. Format: `int32`. |
| `user_agent` | Optional | string | The User-Agent header the request sent. For a buyer-side caller it is kept for 30 days and removed when the customer is deleted. Absent when the request sent none or `caller` is absent. |

### APIRequestLogDetail.request_body

### APIRequestLogDetail.request_body variant 1

oneOf Object.

- Value shape: object. The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. Requests under /v1/me never store bodies. 

### APIRequestLogDetail.request_body variant 2

oneOf Array.

- Value shape: Array of any. The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. Requests under /v1/me never store bodies. 

### APIRequestLogDetail.request_body variant 3

oneOf String.

- Value shape: string. The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. Requests under /v1/me never store bodies. 

### APIRequestLogDetail.response_body

Declared alternatives: [APIRequestLogDetail.request_body](../models/APIRequestLogDetail.md#apirequestlogdetailrequest_body).

