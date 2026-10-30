[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardListResponse

A page of `GiftCard` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [GiftCard](../models/GiftCard.md#giftcard) | `data[]`: [field definitions](../models/GiftCardResponse.md#giftcardresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GiftCardListResponse.data[]

Field definitions: [GiftCardResponse.data](../models/GiftCardResponse.md#giftcardresponsedata).

