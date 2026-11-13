[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackConnectionCheck

Result of checking the connection to a tax calculation callback endpoint, with its status, latency, HTTP status code, and failure category if it failed.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checked_at` | Required | string | When Flint sent the connection check. Format: `date-time`. |
| `failure_category` | Optional | string | Why the callback request failed and the action that can make the next one succeed. - `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing methods. For a 401, check JWT verification with Flint's JWKS, issuer, tax_calculation_callback_id audience, expiration, and body_sha256 of the exact request bytes. For HMAC, check the shared secret and verify the raw body before parsing it. - `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network policy. - `connection_error`: Restore network connectivity to the callback host, then test again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. - `invalid_response`: Return a 2xx application/json response within maximum_response_bytes. For a test delivery, the body must also echo tax_calculation_evaluation_id with empty line_item_calculations and charge_calculations. Then test again. - `request_error`: Flint couldn't complete the request for another reason. Check the URL and your server logs, then test again. - `timeout`: Acknowledge the callback within its configured timeout, then test again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again. Values: [8 declared values](#taxcalculationcallbackconnectioncheck-failure_category-values). |
| `http_status_code` | Optional | integer | HTTP status code your endpoint returned. Omitted when it returned no response. |
| `key_id` | Required | string | ID of the HMAC signing key that signed this request, as sent in the Flint-Signing-Key-Ids header. Empty for a JWT-only callback, which has no shared secret. |
| `latency_milliseconds` | Required | integer | How long your endpoint took to answer, in milliseconds. Format: `int64`. |
| `status` | Required | string | Whether your endpoint answered as the callback requires. - `succeeded`: Your endpoint answered as the request requires. - `failed`: The request failed. See `failure_category`. Values: `"succeeded"`, `"failed"`. |
| `tax_calculation_callback_id` | Required | string | ID of the callback that was called, beginning with `tcb_`. |
| `tax_calculation_callback_revision_id` | Required | string | ID of the callback revision that was called, beginning with `tcbr_`. |

#### TaxCalculationCallbackConnectionCheck failure_category values

- `"authentication_or_http_error"`
- `"blocked_target"`
- `"connection_error"`
- `"dns_error"`
- `"invalid_response"`
- `"request_error"`
- `"timeout"`
- `"tls_error"`

