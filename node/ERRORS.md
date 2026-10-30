# Flint error codes

[Runtime error reference](RUNTIME.md#error-reference)

ApiError exposes code, type, param, details (always an array), remediation, errorSource, docUrl, requestId, requestLogUrl and the redacted decoded body. Object values keep wire names. remediation.retry is one of same_request, after_refresh or none. Unknown codes, types, sources and detail reasons remain extensible. Envelope paths follow errors.objectPath and errors.fields. OAuth errors use error/error_description; missing envelopes use http_error. body, raw and headers are omitted from inspection.

Object path: "error".

| Property | Object-relative path |
| --- | --- |
| code | code |
| message | message |
| type | type |
| param | param |
| details | details |
| remediation | remediation |
| errorSource | error_source |
| docUrl | doc_url |
| requestId | request_id |
| requestLogUrl | request_log_url |

Inspect the error code together with status and class; retry only when the operation permits it. Declared values:

- `"ACTION_NOT_ALLOWED"`
- `"ALREADY_EXISTS"`
- `"API_VERSION_RETIRED"`
- `"AUTHENTICATION_REQUIRED"`
- `"CONCURRENT_MODIFICATION"`
- `"DELIVERY_REQUOTE_REQUIRED"`
- `"EXTERNAL_SERVICE_ERROR"`
- `"FORBIDDEN"`
- `"GIFT_CARD_CHALLENGE_REQUIRED"`
- `"IDEMPOTENCY_KEY_IN_PROGRESS"`
- `"IDEMPOTENCY_KEY_REUSED"`
- `"IDEMPOTENCY_RECOVERY_REQUIRED"`
- `"IDENTITY_VERIFICATION_REQUIRED"`
- `"INSUFFICIENT_SCOPE"`
- `"INTERNAL_ERROR"`
- `"INVALID_CREDENTIAL"`
- `"INVALID_REQUEST"`
- `"INVALID_VALUE"`
- `"INVENTORY_INSUFFICIENT"`
- `"LIMIT_EXCEEDED"`
- `"LIMIT_REACHED"`
- `"MERCHANT_NOT_READY"`
- `"METHOD_NOT_ALLOWED"`
- `"NOT_ALLOWED"`
- `"OPERATION_IN_PROGRESS"`
- `"PAYMENT_ATTEMPT_ACTIVE"`
- `"PAYMENT_OPTION_UNAVAILABLE"`
- `"PAYMENT_PROCESSING_UNAVAILABLE"`
- `"PAYMENT_PROCESSOR_REJECTED"`
- `"PAYMENT_REVIEW_OPEN"`
- `"PROMOTION_DECLINED"`
- `"RATE_LIMIT_EXCEEDED"`
- `"REQUEST_BODY_TOO_LARGE"`
- `"REQUEST_CANCELED"`
- `"REQUEST_TIMEOUT"`
- `"REQUIRED"`
- `"RESOURCE_IN_USE"`
- `"RESOURCE_NOT_FOUND"`
- `"ROUTE_NOT_FOUND"`
- `"SERVICE_UNAVAILABLE"`
- `"UNKNOWN_FIELD"`
- `"UNSUPPORTED_CONTENT_TYPE"`
- `"VERSION_CONFLICT"`

