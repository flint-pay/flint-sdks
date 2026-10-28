[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardAdjustmentsCreateResponse200

A response containing `AdjustGiftCardBalanceResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AdjustGiftCardBalanceResult](../models/AdjustGiftCardBalanceResult.md#adjustgiftcardbalanceresult) | The result of adjusting a gift card's value: the updated gift card, the transactions the adjustment created, and a gift card load when one was made. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

