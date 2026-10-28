[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbacksRotateSigningKeyResponse200

A response containing `DeliveryRateCallbackSigningKeyRotation` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryRateCallbackSigningKeyRotation](../models/DeliveryRateCallbackSigningKeyRotation.md#deliveryratecallbacksigningkeyrotation) | Result of rotating a delivery rate callback's signing key, including the new `key_id` and the new `secret`, which is returned only in this response. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

