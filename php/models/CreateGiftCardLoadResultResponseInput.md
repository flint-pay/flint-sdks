[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardLoadResultResponseInput

A response containing `CreateGiftCardLoadResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreateGiftCardLoadResultInput](../models/CreateGiftCardLoadResultInput.md#creategiftcardloadresultinput) | The result of loading a gift card: the updated gift card, the gift card load, and the transactions it created. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

