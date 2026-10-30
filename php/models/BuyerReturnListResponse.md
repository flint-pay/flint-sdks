[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnListResponse

A page of `BuyerReturn` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerReturn](../models/BuyerReturn.md#buyerreturn) | `data[]`: [field definitions](../models/BuyerReturnResponse.md#buyerreturnresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerReturnListResponse.data[]

Field definitions: [BuyerReturnResponse.data](../models/BuyerReturnResponse.md#buyerreturnresponsedata).

