[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackTestDelivery

Result of sending a test delivery to a tax calculation callback, with its status, latency, HTTP status code, and failure category if it failed.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `failure_category` | Optional | string | Why the callback request failed and the action that can make the next one succeed. - `authentication_or_http_error`: Return a 2xx status after verifying the enabled signing methods. For a 401, check JWT verification with Flint's JWKS, issuer, tax_calculation_callback_id audience, expiration, and body_sha256 of the exact request bytes. For HMAC, check the shared secret and verify the raw body before parsing it. - `blocked_target`: Use a public HTTPS callback target allowed by Flint's outbound network policy. - `connection_error`: Restore network connectivity to the callback host, then test again. - `dns_error`: Fix the callback hostname or its DNS records, then test again. - `invalid_response`: Return a 2xx application/json response within maximum_response_bytes. For a test delivery, the body must also echo tax_calculation_evaluation_id with empty line_item_calculations and charge_calculations. Then test again. - `request_error`: Flint couldn't complete the request for another reason. Check the URL and your server logs, then test again. - `timeout`: Acknowledge the callback within its configured timeout, then test again. - `tls_error`: Fix the callback certificate and TLS configuration, then test again. Values: [8 declared values](#taxcalculationcallbacktestdelivery-failure_category-values). |
| `http_status_code` | Optional | integer | HTTP status code your endpoint returned. Omitted when it returned no response. |
| `key_id` | Required | string | ID of the HMAC signing key that signed this request. Empty for a JWT-only callback, which has no shared secret. Example: `"cbkey_00112233445566778899aabb"`. |
| `latency_milliseconds` | Required | integer | How long your endpoint took to answer, in milliseconds. Format: `int64`. |
| `status` | Required | string | Whether your endpoint answered as the callback requires. - `succeeded`: Your endpoint answered as the request requires. - `failed`: The request failed. See `failure_category`. Values: `"succeeded"`, `"failed"`. |
| `tax_calculation_callback_id` | Required | string | ID of the callback that was called, beginning with `tcb_`. Example: `"tcb_01KEZF7C00N7SER74Y2E6D1ZGT"`. |
| `tax_calculation_callback_revision_id` | Required | string | ID of the callback revision that was called, beginning with `tcbr_`. Example: `"tcbr_01KEZF7C00V2GHWCXVV2NCWX29"`. |
| `tested_at` | Required | string | When Flint sent the test delivery. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### TaxCalculationCallbackTestDelivery failure_category values

- `"authentication_or_http_error"`
- `"blocked_target"`
- `"connection_error"`
- `"dns_error"`
- `"invalid_response"`
- `"request_error"`
- `"timeout"`
- `"tls_error"`

