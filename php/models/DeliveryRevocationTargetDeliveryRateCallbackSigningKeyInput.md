[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationTargetDeliveryRateCallbackSigningKeyInput

Fences one current or previous HMAC signing key of the named delivery rate callback.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | ID of the delivery rate callback that owns the targeted revision or signing key. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. |
| `delivery_rate_callback_signing_key_id` | Required | string | ID of the HMAC signing key to fence. It must be the named callback's current or previous key; secret material is never returned. Example: `"cbkey_00112233445566778899aabb"`. |
| `target_type` | Required | string | Fences one current or previous HMAC signing key of the named delivery rate callback. Values: `"delivery_rate_callback_signing_key"`. |

