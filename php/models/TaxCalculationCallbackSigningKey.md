[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackSigningKey

Result of rotating a tax calculation callback's HMAC secret, including the new `key_id` and the new `secret`, which is returned only in this response.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key_id` | Required | string | ID of the new HMAC signing key. |
| `secret` | Required | string | New HMAC shared secret. Returned only by this response. |
| `tax_calculation_callback_id` | Required | string | ID of the callback whose secret was issued or rotated, beginning with `tcb_`. |

