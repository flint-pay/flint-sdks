[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardResultResponse

A response containing `CreateGiftCardResult` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreateGiftCardResult](../models/CreateGiftCardResult.md#creategiftcardresult) | Resource, collection, or operation result returned by this request. The result of creating a gift card: the card, its transactions, any load and notification, and the code while it can still be recovered. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

