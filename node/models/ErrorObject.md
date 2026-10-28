[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorObject

The error returned for a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details` for individual failures.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable Flint error code. Each operation lists its codes in x-flint-error-codes, and each error response lists the codes it can carry at that status. Values: [43 declared values](../ERRORS.md#provider-error-codes). |
| `details` | Optional | Array of [ErrorDetail](../models/ErrorDetail.md#errordetail) | Individual failures belonging to this error. Present on every validation error and every error carrying facts. On non-validation errors the first item repeats the top-level code and param. Facts appear only in typed detail fields; param contains public request field paths. |
| `doc_url` | Required | string | Error reference at https://developers.withflintpay.com/docs/errors# followed by the lowercase error code. |
| `error_source` | Required | string | System boundary responsible for correcting the failure. Values: `"merchant"`, `"integration"`, `"flint"`. |
| `message` | Required | string | Human-readable explanation for your logs. The wording can change, so branch on code, and do not show it to buyers as is. |
| `param` | Optional | string | Public JSON request field path that caused the failure, such as line_items[0].name, when the failure concerns one field. |
| `remediation` | Required | [ErrorRemediation](../models/ErrorRemediation.md#errorremediation) or null | Recovery guidance: whether retrying can succeed and what to do next. |
| `request_id` | Required | string | ID of this request, also sent in the X-Request-Id response header. Include it when you contact Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `request_log_url` | Optional | string | Path of this request's log in the request-logs API, present when the credential can read it. Flint writes the log just after responding, so a read sent immediately can return 404 RESOURCE_NOT_FOUND; retry after a second. |
| `type` | Required | string | Coarse category determined by the HTTP status. 400: validation_error; 401: authentication_error; 403: authorization_error; 404: not_found_error; 405, 410, 413, 415, 499: protocol_error; 409: conflict_error; 429: rate_limit_error; 502: external_service_error; 503: unavailable_error; 504: timeout_error. All other error statuses: internal_error. Values: [11 declared values](APIRequestLog.md#apirequestlog-error_type-values). |

