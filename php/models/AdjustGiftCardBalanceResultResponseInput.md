[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AdjustGiftCardBalanceResultResponseInput

A response containing `AdjustGiftCardBalanceResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AdjustGiftCardBalanceResultInput](../models/AdjustGiftCardBalanceResultInput.md#adjustgiftcardbalanceresultinput) | The result of adjusting a gift card's value: the updated gift card, the transactions the adjustment created, and a gift card load when one was made. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

