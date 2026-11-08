[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCalculationCallbackSigningKeyRotationResponse

A response containing `TaxCalculationCallbackSigningKey` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TaxCalculationCallbackSigningKey](../models/TaxCalculationCallbackSigningKey.md#taxcalculationcallbacksigningkey) | Resource, collection, or operation result returned by this request. Result of rotating a tax calculation callback's HMAC secret, including the new `key_id` and the new `secret`, which is returned only in this response. `data`: [field definitions](../models/TaxCalculationCallbackSigningKeyRotationResponse.md#taxcalculationcallbacksigningkeyrotationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TaxCalculationCallbackSigningKeyRotationResponse.data

Resource, collection, or operation result returned by this request. Result of rotating a tax calculation callback's HMAC secret, including the new `key_id` and the new `secret`, which is returned only in this response.

Field definitions: [shared fields](TaxCalculationCallbackSigningKeyInput.md#taxcalculationcallbacksigningkeyinput).

### TaxCalculationCallbackSigningKeyRotationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

