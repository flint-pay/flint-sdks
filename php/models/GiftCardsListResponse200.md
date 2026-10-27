[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardsListResponse200

A page of `GiftCard` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [GiftCard](../models/GiftCard.md#giftcard) | `data[]`: [field definitions](../models/GiftCardsGetResponse200.md#giftcardsgetresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GiftCardsListResponse200.data[]

Field definitions: [GiftCardsGetResponse200.data](../models/GiftCardsGetResponse200.md#giftcardsgetresponse200data).

