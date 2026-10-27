[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeListGiftCardsResponse200

A page of `BuyerGiftCard` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerGiftCard](../models/BuyerGiftCard.md#buyergiftcard) | `data[]`: [field definitions](../models/MeGetGiftCardResponse200.md#megetgiftcardresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MeListGiftCardsResponse200.data[]

Field definitions: [MeGetGiftCardResponse200.data](../models/MeGetGiftCardResponse200.md#megetgiftcardresponse200data).

