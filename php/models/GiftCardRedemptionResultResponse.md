[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionResultResponse

A response containing `GiftCardRedemptionResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [GiftCardRedemptionResult](../models/GiftCardRedemptionResult.md#giftcardredemptionresult) | Result of redeeming a gift card: the updated gift card, the redemption, and the resulting transactions. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

