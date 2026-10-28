[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionsCreateCodeResponse201

A response containing `PromotionCode` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PromotionCode](../models/PromotionCode.md#promotioncode) | The requested promotion code. A code a buyer enters to claim a promotion. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

