[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackSigningKeyRotation

Result of rotating a delivery rate callback's signing key, including the new `key_id` and the new `secret`, which is returned only in this response.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string | Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. |
| `key_id` | Required | string | Example: `"cbkey_00112233445566778899aabb"`. |
| `secret` | Required | string | New signing secret. Returned only by this rotation response. |

