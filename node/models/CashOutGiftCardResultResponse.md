[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CashOutGiftCardResultResponse

A response containing `CashOutGiftCardResult` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CashOutGiftCardResult](../models/CashOutGiftCardResult.md#cashoutgiftcardresult) | The result of recording a gift card cash-out: the updated gift card and the transactions it created. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

