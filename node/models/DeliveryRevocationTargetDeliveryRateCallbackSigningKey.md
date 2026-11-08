[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationTargetDeliveryRateCallbackSigningKey







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | ID of the delivery rate callback that owns the targeted revision or signing key. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. |
| `delivery_rate_callback_signing_key_id` | Required | string | ID of the HMAC signing key to fence. It must be the named callback's current or previous key; secret material is never returned. Example: `"cbkey_00112233445566778899aabb"`. |
| `target_type` | Required | string | Fences one current or previous HMAC signing key of the named delivery rate callback. Values: `"delivery_rate_callback_signing_key"`. |

### DeliveryRevocationTargetDeliveryRateCallbackSigningKey variant 1: `target_type` = `"delivery_rate_callback_signing_key"`

anyOf CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKey: Declared schema CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKey. Fences one current or previous HMAC signing key of the named delivery rate callback..

- Constraints for `delivery_rate_callback_id`: minLength: `1`.
- Constraints for `delivery_rate_callback_signing_key_id`: minLength: `1`.

### DeliveryRevocationTargetDeliveryRateCallbackSigningKey variant 2: `target_type` = `"delivery_rate_callback_signing_key"`

anyOf DeliveryRevocationTargetDeliveryRateCallbackSigningKey: Declared schema DeliveryRevocationTargetDeliveryRateCallbackSigningKey. Fences one current or previous HMAC signing key of the named delivery rate callback..

No additional constraints.

