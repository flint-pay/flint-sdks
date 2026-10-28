[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardsRotateCodeResponse200

A response containing `RotateGiftCardCodeResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RotateGiftCardCodeResult](../models/RotateGiftCardCodeResult.md#rotategiftcardcoderesult) | The gift card after its code was rotated, with the new `code` while it can be recovered and the notification sent. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

