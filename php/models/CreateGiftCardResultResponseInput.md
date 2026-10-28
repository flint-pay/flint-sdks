[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardResultResponseInput

A response containing `CreateGiftCardResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreateGiftCardResultInput](../models/CreateGiftCardResultInput.md#creategiftcardresultinput) | The result of creating a gift card: the card, its transactions, any load and notification, and the code while it can still be recovered. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

