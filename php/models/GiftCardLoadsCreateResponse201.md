[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadsCreateResponse201

A response containing `CreateGiftCardLoadResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreateGiftCardLoadResult](../models/CreateGiftCardLoadResult.md#creategiftcardloadresult) | The result of loading a gift card: the updated gift card, the gift card load, and the transactions it created. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

