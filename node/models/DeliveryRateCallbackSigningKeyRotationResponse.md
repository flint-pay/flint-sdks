[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackSigningKeyRotationResponse

A response containing `DeliveryRateCallbackSigningKeyRotation` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryRateCallbackSigningKeyRotation](../models/DeliveryRateCallbackSigningKeyRotation.md#deliveryratecallbacksigningkeyrotation) | Result of rotating a delivery rate callback's signing key, including the new `key_id` and the new `secret`, which is returned only in this response. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

