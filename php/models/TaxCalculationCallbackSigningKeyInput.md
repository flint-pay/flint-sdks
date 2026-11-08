[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackSigningKeyInput

Result of rotating a tax calculation callback's HMAC secret, including the new `key_id` and the new `secret`, which is returned only in this response.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key_id` | Required | string | ID of the new HMAC signing key. Example: `"cbkey_00112233445566778899aabb"`. |
| `secret` | Required | string | New HMAC shared secret. Returned only by this response. |
| `tax_calculation_callback_id` | Required | string | ID of the callback whose secret was issued or rotated, beginning with `tcb_`. Example: `"tcb_01KEZF7C00N7SER74Y2E6D1ZGT"`. |

