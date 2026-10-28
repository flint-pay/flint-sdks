[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackConnectionCheckInput

Result of checking the connection to a delivery rate callback endpoint, with its status, latency, HTTP status code, and failure category if it failed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checked_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_rate_callback_id` | Required | string |  |
| `delivery_rate_callback_revision_id` | Required | string |  |
| `failure_category` | Optional | string | Why the callback connection check failed and the action that can make the next check succeed. - `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing methods. For a 401, check JWT verification with Flint's JWKS, issuer, delivery_rate_callback_id audience, expiration, and body_sha256 of the exact request bytes. For HMAC, check the shared secret and verify the raw body before parsing it. - `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network policy. - `connection_error`: Restore network connectivity to the callback host, then test again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. - `invalid_response`: Return a 2xx application/json response within maximum_response_bytes. For a test delivery, the body must also follow the callback response rules. Then test again. - `request_error`: Flint couldn't complete the request for another reason. Check the URL and your server logs, then test again. - `timeout`: Acknowledge the callback within its configured timeout, then test again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again. Values: [8 declared values](#deliveryratecallbackconnectioncheckinput-failure_category-values). |
| `http_status_code` | Optional | integer |  |
| `key_id` | Required | string | ID of the HMAC signing key that signed this request. Empty for a JWT-only callback, which has no shared secret. |
| `latency_milliseconds` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `status` | Required | string | Values: `"succeeded"`, `"failed"`. |

#### DeliveryRateCallbackConnectionCheckInput failure_category values

- `"authentication_or_http_error"`
- `"blocked_target"`
- `"connection_error"`
- `"dns_error"`
- `"invalid_response"`
- `"request_error"`
- `"timeout"`
- `"tls_error"`

