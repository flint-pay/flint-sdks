[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodeResponse

A response containing `PromotionCode` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PromotionCode](../models/PromotionCode.md#promotioncode) | The requested promotion code. A code a buyer enters to claim a promotion. `data`: [field definitions](../models/PromotionCodeResponse.md#promotioncoderesponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PromotionCodeResponse.data

The requested promotion code. A code a buyer enters to claim a promotion.

Field definitions: [shared fields](PromotionResponse.md#promotionresponsedatacodes).

### PromotionCodeResponse.data.metadata

Field definitions: [PromotionResponse.data.codes[].metadata](../models/PromotionResponse.md#promotionresponsedatacodesmetadata).

### PromotionCodeResponse.data.promotion

Field definitions: [PromotionResponse.data.codes[].promotion](../models/PromotionResponse.md#promotionresponsedatacodespromotion).

### PromotionCodeResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

