[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLogListResponse

A page of `APIRequestLog` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [APIRequestLog](../models/APIRequestLog.md#apirequestlog) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/APIRequestLogListResponse.md#apirequestloglistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### APIRequestLogListResponse.data[]

A record of an API request and its response.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string | Stable identifier of this log entry. Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`. |
| `caller` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | Who made this request. An API key, workload token, or partner app token records that API key, workload identity, or partner app installation. A Dashboard write, CLI login, or onboarding session records the user. A buyer checkout request records the checkout session. A buyer account request records the customer session. A request made with invoice access records the invoice. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`. `caller`: [field definitions](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatacaller). |
| `client_request_id` | Optional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. Example: `"checkout-1842"`. |
| `client_trace_id` | Optional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. Example: `"0123456789abcdef0123456789abcdef"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | The customer whose customer session made this request; `caller` is the session. Absent for every other caller. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `error_code` | Optional | string | The response's top-level error `code`. Absent for successful requests. |
| `error_summary` | Optional | string | A concise explanation of why the request failed. |
| `error_type` | Optional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLogInput.md#apirequestloginput-error_type-values). |
| `expand` | Optional | Array of string | Normalized expand paths Flint applied. Absent when the request did not use expand. |
| `http_method` | Required | string | HTTP method of the request. |
| `latency_milliseconds` | Required | integer | Time Flint spent handling the request, in milliseconds. Format: `int64`. |
| `partner_app_id` | Optional | string | The partner app whose partner app token made this request; `caller` is the install. Absent for every other caller. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `path` | Required | string | Request path as sent, with real IDs, such as /v1/orders/ord_123. |
| `recommended_action` | Optional | string | The next step to resolve this failure. |
| `reference_url` | Optional | string | A Flint guide that explains this failure. Absent when no guide applies. Format: `uri`. Example: `"https://example.com/receipt"`. |
| `request_id` | Required | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `requested_api_version` | Optional | string | The API version Flint resolved for the request. |
| `requested_api_version_source` | Optional | string | Where `requested_api_version` came from. Absent when Flint did not record one. Values: `"header"`, `"partner_app"`, `"merchant"`, `"current"`. |
| `resource_id` | Optional | string | The ID of the resource the request is about, when Flint can attribute it to one. A failed create can have a `resource_type` and no ID. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Optional | string | The kind of resource the request is about, when Flint can attribute it to one. Example: `"order"`. Values: [153 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `retry` | Optional | string | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Required | string | The matched route as a method and path template, such as `POST /v1/orders`. |
| `served_api_version` | Optional | string | The API version Flint used to encode the response. |
| `status_code` | Required | integer | HTTP status Flint returned. Format: `int32`. |

### APIRequestLogListResponse.data[].caller

Field definitions: [APIRequestLogDetailResponse.data.caller](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatacaller).

### APIRequestLogListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

