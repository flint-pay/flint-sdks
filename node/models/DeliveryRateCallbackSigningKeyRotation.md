[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackSigningKeyRotation

Result of rotating a delivery rate callback's signing key, including the new `key_id` and the new `secret`, which is returned only in this response.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Required | string |  |
| `key_id` | Required | string |  |
| `secret` | Required | string | New signing secret. Returned only by this rotation response. |

