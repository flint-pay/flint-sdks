[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCashOutsCreateResponse200

A response containing `CashOutGiftCardResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CashOutGiftCardResult](../models/CashOutGiftCardResult.md#cashoutgiftcardresult) | The result of recording a gift card cash-out: the updated gift card and the transactions it created. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

